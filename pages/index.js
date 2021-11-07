import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (
      <Wrapper>
        <Map id='map'>map</Map>
        <ActionItems>
      {/* Header */}
      <Header><UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        <Profile>
        <Name>{user && user.name}</Name>
        <UserImg src={user && user.photoUrl} onClick={() => signOut(auth)}/>
        </Profile>
      </Header>
      {/* action button */}
      <ActionBtns>
        <Link href='/search'>
        <ActionBtn>
          <ActionBtnImg src="https://i.ibb.co/cyvcpfF/uberx.png"/>
          Ride
        </ActionBtn>
        </Link>
        <ActionBtn>
        <ActionBtnImg src="https://i.ibb.co/n776JLm/bike.png"/>
          Wheels
        </ActionBtn>
        <ActionBtn>
        <ActionBtnImg src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
          Reserve
        </ActionBtn>
        </ActionBtns>
      {/* input box */}
      <InputBtn>
        Where to?
      </InputBtn>
        </ActionItems>
      </Wrapper>
  )
}

const Wrapper = tw.div `
  flex flex-col h-screen
`

const ActionItems = tw.div `
  flex-1 p-4
`

const Header = tw.div `
  flex justify-between items-center
`

const Name = tw.div `
  mr-4 w-20 text-sm
`

const UberLogo = tw.img `
  h-28
`

const UserImg = tw.img `
  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`

const Profile = tw.div `
  flex items-center
`

const ActionBtns = tw.div `
  flex
`

const ActionBtn = tw.div `
  bg-gray-300 flex-1 cursor-pointer m-1 h-32 items-center flex flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionBtnImg = tw.img `
  h-3/5
`

const InputBtn = tw.div `
  h-20 bg-gray-300 text-2xl p-4 flex items-center mt-8
`