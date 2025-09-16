// Components

// Images

// Imports

// Styles
import s from './SpinnerLoading.module.css'

export default function Spinner({size, color}: {size: number, color: string}) {
  return (
    <div className={s.posWrapper}>
      <div className={s.loader} style={{border:`${size/6}px solid #f3f3f3`, borderTop: `${size/6}px solid ${color}`, width: `${size}px`, height: `${size}px`}} ></div>
    </div>
  )
}
