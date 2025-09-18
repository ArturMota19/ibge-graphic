import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PibEvolution from "./page";
import { MemoryRouter } from "react-router-dom";
import { BaseRequest } from "../../services/BaseRequest";
import { toast } from "react-toastify";
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Obs: Testes unitários não são meu forte ainda, estou estudando para melhorar =D

// baserequest mock
vi.mock("../../services/BaseRequest", () => ({
    BaseRequest: vi.fn(),
}));

// toast mock
vi.mock("react-toastify", () => ({
    toast: { error: vi.fn() },
}));

describe("PibEvolution component", () => {
    it("renders page text", () => {
        render(
            <MemoryRouter>
                <PibEvolution />
            </MemoryRouter>
        );
        expect(screen.getByText(/Evolução do PIB/i)).toBeInTheDocument();
    });

    it("shows error if trying to search with less than two years selected", async () => {
        render(
            <MemoryRouter>
                <PibEvolution />
            </MemoryRouter>
        );

        const button = screen.getByRole("button", { name: /gerar gráfico/i });
        fireEvent.click(button);

        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith(
                "Selecione ao menos dois anos para realizar a análise.",
                expect.any(Object)
            );
        });

        expect(BaseRequest).not.toHaveBeenCalled();
    });


});
