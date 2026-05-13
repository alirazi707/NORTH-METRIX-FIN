import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Layout } from "@/components/layout/Layout";

export function ScrollDemo() {
    return (
        <Layout>
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-foreground">
                                Unleash the power of <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">
                                    Scroll Animations
                                </span>
                            </h1>
                        </>
                    }
                >
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop"
                        alt="Analytics Dashboard"
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </Layout>
    );
}

export default ScrollDemo;
