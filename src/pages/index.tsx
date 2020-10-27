type Props = {
  title: string
}

const teste = 'asd'

export default function Home({ title = 'React' }: Props) {
  return <div>{title}</div>
}
