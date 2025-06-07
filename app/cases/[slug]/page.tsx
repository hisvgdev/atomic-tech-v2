interface CaseProps {
    params: Promise<{ slug: string }>
}

export default async function Case({ params }: CaseProps) {
    const slug = await params.then((s) => s.slug)
    return (
        <div>
            <div>{slug}</div>
        </div>
    )
}
