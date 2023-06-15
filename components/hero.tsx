"use client";

import {Button} from "@/components/button";

export const Hero = () => {
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, book, or rent a car — quickly and easily!
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking process.
                </p>
                <Button
                    title="Explore cars"
                    containerStyle="bg-primary-blue text-white rounded-full mt-10"
                />
            </div>
        </div>
    )
}