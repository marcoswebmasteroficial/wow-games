import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import Cart, { CartProps } from 'templates/Cart'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session
    }
  }
}
