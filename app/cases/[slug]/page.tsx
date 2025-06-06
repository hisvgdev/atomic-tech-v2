export default function Case(props: { params: { slug: string } }) {
    const { params } = props
    return (
        <div>
            <div>{params.slug}</div>
        </div>
    )
}
