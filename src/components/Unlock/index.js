// Write your code here
import {useState} from 'react'
import {MainContainer, Paragraph, Button, Image} from './styledComponents'

const Unlock = () => {
  const [lockOpen, setLockOpen] = useState(true)

  const onClickColor = () => {
    setLockOpen(prevState => !prevState)
  }
  return (
    <MainContainer>
      {lockOpen ? (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}

      {lockOpen ? (
        <Paragraph>Your Device is Locked</Paragraph>
      ) : (
        <Paragraph>Your Device is Unlocked</Paragraph>
      )}

      {lockOpen ? (
        <Button type="button" onClick={onClickColor}>
          Unlock
        </Button>
      ) : (
        <Button type="button" onClick={onClickColor}>
          Lock
        </Button>
      )}
    </MainContainer>
  )
}
export default Unlock
