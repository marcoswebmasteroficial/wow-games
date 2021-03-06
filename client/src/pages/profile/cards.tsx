import CardsList, { CardsListProps } from 'components/CardsList'
import Profile from 'templates/Profile'
import mockCards from 'components/PaymentOptions/mock'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  if (!session) return { props: {} }
  return {
    props: {
      session,
      cards: mockCards
    }
  }
}
