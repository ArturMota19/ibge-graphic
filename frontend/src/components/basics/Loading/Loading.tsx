// Components

// Images
import icon from '../../../assets/logo_menu.png';
// Imports
// Styles
import { useState, useEffect, useMemo } from 'react';
import s from './Loading.module.css';

export default function Loading() {

  const messages = useMemo(() => [
    'Cadastrando seu restaurante...',
    'Verificando locais de entrega...',
    'Configurando janela de recebimento...',
    'Carregando produtos disponíveis...',
    'Montando catálogo de fornecedores...',
    'Comparando preços e avaliações...',
    'Sincronizando lista de favoritos...',
    'Conectando com distribuidores...',
    'Atualizando estoque de produtos...',
    'Preparando sistema de pedidos...',
    'Configurando suporte Conéctar...',
    'Ativando seguro de qualidade...',
    'Finalizando configurações...',
    'Preparando Conéctar para você...',
  ], []);

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => {
        const currentIndex = messages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 800);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <main className={s.loading}>
      <img src={icon} alt="Logo Conéctar" className={s.icon} />
      <p>{currentMessage}</p>
    </main>
  );
}