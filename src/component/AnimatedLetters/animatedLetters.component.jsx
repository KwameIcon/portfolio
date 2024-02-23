import './animatedLetters.style.scss'

export const AnimatedLetters = ({ letterClass, strArray, idx }) => (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
)
