"use client"

export default function Blog({ params }) {

	return (
		<>
			<h1>
				Type: {decodeURI(params.type)}, Mærke: {decodeURI(params.brand)}</h1>
		</>
	)
}
