import { useState } from 'react'
import { Button } from '@components/ui/button'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup } from '@components/ui/select'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@components/ui/dialog'

import { ShowWindowSize } from './components/ShowWindowSize'
import { useWindowSize } from '@hooks/useWindowSize'

export default function UI() {
	const [open, setOpen] = useState(false)
	const { width, height } = useWindowSize()
	const handleClick = () => {
		setOpen(true)
	}
	return <div>
		<Button variant="default">Click me</Button>
		<Button variant="outline">Click me</Button>
		<Button variant="secondary">Click me</Button>
		<Button variant="ghost">Click me</Button>
		<Button variant="link">Click me</Button>
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="Select an option" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="1">Option 1</SelectItem>
					<SelectItem value="2">Option 2</SelectItem>
					<SelectItem value="3">Option 3</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="default">Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
				</DialogHeader>
				<DialogDescription>Dialog Description</DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="default">Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>

		<Button variant="default" onClick={handleClick}>Click me</Button>
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
				</DialogHeader>
				<DialogDescription>Dialog Description</DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="default" onClick={() => setOpen(false)}>Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>

		{/* useWindowSize hook */}
		<div>
			<p>Width: {width}</p>
			<p>Height: {height}</p>
		</div>
		<ShowWindowSize></ShowWindowSize>
	</div>
}
