'use client';
import { useState, useEffect, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import PartB from './_components/PartB';
import PartA from './_components/PartA';

export default function Home() {
	const [stage, setStage] = useState(0);
	const [cardEnterMoved, setCardEnterMoved] = useState(false);
	const [activeCard, setActiveCard] = useState<null | string>(null);

	const nodeRef = useRef(null);
	const node2Ref = useRef(null);
	const node3Ref = useRef(null);

	useEffect(() => {
		if (stage === 1) {
			setCardEnterMoved(true);
		} else if (stage === 3 || stage === 4) {
			setTimeout(() => {
				setStage((pre) => pre + 1);
			}, 1000);
		}
	}, [stage]);

	useEffect(() => {
		if (activeCard) {
			setTimeout(() => {
				setStage(3);
			}, 2000);
		}
	}, [activeCard]);
  
	return (
		<div
			className="relative flex items-center justify-center
     min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
		>
			<CSSTransition
				in={stage === 0}
				timeout={1000}
				classNames="fade"
				unmountOnExit
				nodeRef={nodeRef}
			>
				<button
					className="absolute mx-auto z-30 fade border border-white px-4 py-2"
					ref={nodeRef}
					onClick={() => setStage(1)}
				>
					ENTER
				</button>
			</CSSTransition>

			<CSSTransition
				in={stage === 1 || stage === 2 || stage === 3}
				timeout={1000}
				classNames="fade"
				nodeRef={node2Ref}
				unmountOnExit
			>
				<div ref={node2Ref}>
					<PartA
						stage={stage}
						cardEnterMoved={cardEnterMoved}
						activeCard={activeCard}
						setStage={setStage}
						setActiveCard={setActiveCard}
					/>
				</div>
			</CSSTransition>
			<CSSTransition
				in={stage === 5 || stage === 6}
				timeout={1000}
				classNames="fade"
				unmountOnExit
				nodeRef={node3Ref}
			>
				<PartB node3Ref={node3Ref} stage={stage} setStage={setStage} />
			</CSSTransition>
		</div>
	);
}
