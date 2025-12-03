import { useWindowSize } from '@hooks/useWindowSize'
export function ShowWindowSize() {
	const { width, height } = useWindowSize();
	return <div>
		<p>ShowWindowSize</p>
		<p>Width: {width}</p>
		<p>Height: {height}</p>
	</div>
}
