'use client';
import { useState } from 'react';
import Image from 'next/image';
import Tarot1 from '@/app/_components/tarot1';
import Tarot2 from '@/app/_components/tarot2';
import Tarot3 from '@/app/_components/tarot3';
import Tarot4 from '@/app/_components/tarot4';

export default function Home() {
	const [stage, setStage] = useState(0);
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
}
