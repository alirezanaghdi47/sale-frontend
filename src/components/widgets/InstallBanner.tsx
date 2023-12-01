'use client';

// libraries
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useMediaQuery} from '@react-hooks-library/core';
import {LuX} from "react-icons/lu";
import {CSSTransition} from 'react-transition-group';

// components
import {IconButton} from "@/components/modules/IconButton";
import {Button} from "@/components/modules/Button";

let deferredPrompt = null;

const InstallBanner = () => {

    const isStandalone = useMediaQuery('(display-mode: standalone)');

    const nodeRef = useRef(null);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {

        if (!isStandalone) {
            window.addEventListener("beforeinstallprompt", (e) => {
                e.preventDefault();
                deferredPrompt = e;
                setShowBanner(true);
            });
        } else {
            setShowBanner(false);
        }

    }, [isStandalone]);

    const _handleInstall = () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted"){
                setShowBanner(false);
            } else {
                setShowBanner(true);
            }
        });
    };

    const _handleClose = () => setShowBanner(false);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={showBanner}
            timeout={300}
            classNames="fade-in"
            mountOnEnter
            unmountOnExit
        >

            <div
                className="fixed z-20 bottom-[70px] left-0 flex md:hidden justify-between items-center gap-2 w-full h-[70px] bg-blue shadow-3xl px-4 py-2"
                ref={nodeRef}
            >

                <div className="flex justify-start items-center gap-x-2">

                    <Image
                        src="/assets/images/logo.png"
                        alt='logo'
                        width={32}
                        height={32}
                        className="min-w-[32px] min-h-[32px] rounded-full"
                    />

                    <h3 className="text-sm text-light ml-4">
                        وب اپلیکیشن ( PWA )
                    </h3>

                    <Button
                        variant="contained"
                        color="light"
                        onClick={_handleInstall}
                    >
                        نصب کنید
                    </Button>

                </div>

                <IconButton
                    variant="contained"
                    color="light"
                    size="sm"
                    onClick={_handleClose}
                >
                    <LuX size={20}/>
                </IconButton>

            </div>

        </CSSTransition>
    )
}

export default InstallBanner;