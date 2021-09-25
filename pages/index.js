export default function Home() {}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/index.xml',
      permanent: false,
    },
  }
}