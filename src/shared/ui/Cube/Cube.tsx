import C from './Cube.module.scss'

type CubeProps = {
  value: number
  isReRoll: boolean
}

export const Cube = (props: CubeProps) => {
  return (
    <div className={C.container}>
      <div className={`${C.dice} ${props.isReRoll ? C.reRoll : ''}`} data-side={props.value}>
        <div className={`${C.sides} ${C.side1}`}>
          <span className={`${C.dot} ${C.dot1}`}></span>
        </div>
        <div className={`${C.sides} ${C.side2}`}>
          <span className={`${C.dot} ${C.dot1}`}></span>
          <span className={`${C.dot} ${C.dot2}`}></span>
        </div>
        <div className={`${C.sides} ${C.side3}`}>
          <span className={`${C.dot} ${C.dot1}`}></span>
          <span className={`${C.dot} ${C.dot2}`}></span>
          <span className={`${C.dot} ${C.dot3}`}></span>
        </div>
        <div className={`${C.sides} ${C.side4}`}>
          <span className={`${C.dot} ${C.dot1}`}></span>
          <span className={`${C.dot} ${C.dot2}`}></span>
          <span className={`${C.dot} ${C.dot3}`}></span>
          <span className={`${C.dot} ${C.dot4}`}></span>
        </div>
        <div className={`${C.sides} ${C.side5}`}>
          <span className={`${C.dot} ${C.dot1}`}></span>
          <span className={`${C.dot} ${C.dot2}`}></span>
          <span className={`${C.dot} ${C.dot3}`}></span>
          <span className={`${C.dot} ${C.dot4}`}></span>
          <span className={`${C.dot} ${C.dot5}`}></span>
        </div>
        <div className={`${C.sides} ${C.side6}`}>
          <span className={`${C.dot} ${C.dot1}`}></span>
          <span className={`${C.dot} ${C.dot2}`}></span>
          <span className={`${C.dot} ${C.dot3}`}></span>
          <span className={`${C.dot} ${C.dot4}`}></span>
          <span className={`${C.dot} ${C.dot5}`}></span>
          <span className={`${C.dot} ${C.dot6}`}></span>
        </div>
      </div>
    </div>
  )
}
