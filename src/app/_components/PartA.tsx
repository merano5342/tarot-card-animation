import Tarot1 from '@/app/_components/tarot1';
import Tarot2 from '@/app/_components/tarot2';
import Tarot3 from '@/app/_components/tarot3';
import Tarot4 from '@/app/_components/tarot4';
import CardBorder from '@/app/_components/cardBorder';

const TAROT_CARD_DATA = [
	{ cardFace: <Tarot1 />, text: '毅力', id: '1', style: '' },
	{ cardFace: <Tarot2 />, text: '樂觀', id: '2', style: '' },
	{ cardFace: <Tarot3 />, text: '積極', id: '3', style: '' },
	{ cardFace: <Tarot4 />, text: '執著', id: '4', style: '' },
];

const PartA = ({
	stage,
	cardEnterMoved,
	activeCard,
	setStage,
	setActiveCard,
}: {
	stage: number;
	cardEnterMoved: boolean;
	activeCard: string | null;
	setStage: React.Dispatch<React.SetStateAction<number>>;
	setActiveCard: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
	return (
		<main
			className={`${
				activeCard ? 'grid-cols-1' : ''
			} grid grid-cols-2 gap-8 row-start-2 items-center sm:items-start`}
		>
			{TAROT_CARD_DATA.map((card) => (
				<div
					key={card.id}
					className={cardEnterMoved ? 'card-enter' : 'moved'}
					data-id={card.id}
					data-active={stage >= 2 && card.id === activeCard}
				>
					<button
						className="card flex flex-col justify-center items-center relative"
						disabled={activeCard !== null}
						data-hidden={activeCard !== null && card.id !== activeCard}
						onClick={() => {
							setActiveCard(card.id);
							setStage(2);
						}}
					>
						{card.cardFace}
						<h2 className="text text-white text-xl  text-center tracking-[10px] -mr-3">
							{card.text}
						</h2>
						<CardBorder />
					</button>
				</div>
			))}
		</main>
	);
};

export default PartA;
