import { MutableRefObject } from 'react';

import { useState } from 'react';

const TAROT_BUTTON_DATA = {
	btn1: '無懼未來的自己',
	btn2: '勇於挑戰的自己',
	btn3: '珍惜每天的自己',
};

const PartB = ({
	node3Ref,
	stage,
	setStage,
}: {
	node3Ref: MutableRefObject<null>;
	stage: number;
	setStage: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [activeBtn, setActiveBtn] = useState<
		null | keyof typeof TAROT_BUTTON_DATA
	>(null);
	return (
		<div className="dropdown-box w-[320px] h-[500px]" ref={node3Ref}>
			<div className="dropdown-title-box py-4 mx-auto text-center">
				<p className="h-6" data-active={activeBtn !== null}>
					{activeBtn !== null ? TAROT_BUTTON_DATA[activeBtn] : ''}
				</p>
			</div>
			<div className="dropdown w-full rounded-b-[20px]" data-fold={stage >= 6}>
				<div className="dropdown-content">
					<p className="text-sm uppercase text-center">play on with</p>
					<button
						data-active={'btn1' === activeBtn}
						disabled={activeBtn !== null}
						onClick={() => {
							setStage(6);
							setActiveBtn('btn1');
						}}
						className="text-2xl text-center"
					>
						<p>{TAROT_BUTTON_DATA['btn1']}</p>
					</button>
				</div>
				<div className="dropdown-content">
					<button
						data-active={'btn2' === activeBtn}
						disabled={activeBtn !== null}
						onClick={() => {
							setStage(6);
							setActiveBtn('btn2');
						}}
						className="text-2xl text-center"
					>
						<p>{TAROT_BUTTON_DATA['btn2']}</p>
					</button>
				</div>
				<div className="dropdown-content">
					<button
						data-active={'btn3' === activeBtn}
						disabled={activeBtn !== null}
						onClick={() => {
							setStage(6);
							setActiveBtn('btn3');
						}}
						className="text-2xl text-center"
					>
						<p>{TAROT_BUTTON_DATA['btn3']}</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PartB;
