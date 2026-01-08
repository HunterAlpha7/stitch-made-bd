"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Logo({ className = "" }) {
    const [error, setError] = useState(false);

    if (error) {
        return <span className={`font-semibold text-lg ${className}`}>Stitch Made Limited</span>;
    }

    return (
        <div className={`relative h-10 w-auto aspect-[3/1] ${className}`}>
            <Image
                src="/logo.svg"
                alt="Stitch Made Limited"
                fill
                className="object-contain object-left"
                onError={() => setError(true)}
                priority
            />
        </div>
    );
}
