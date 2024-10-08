'use client';

// libraries
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {useCookies} from "react-cookie";
import {useMediaQuery} from '@react-hooks-library/core';
import {LuX} from "react-icons/lu";
import {CSSTransition} from 'react-transition-group';

// modules
import {IconButton} from "@/modules/IconButton";
import {Button} from "@/modules/Button";

const InstallBanner = () => {

    const nodeRef = useRef(null);
    const [deferredPrompt , setDeferredPrompt] = useState<any>(null);
    const [cookies, setCookie] = useCookies(['pwa-install-status']);
    const isStandalone = useMediaQuery('(display-mode: standalone)');

    useEffect(() => {
        if (cookies["pwa-install-status"] !== "dismissed") {
            window.addEventListener("beforeinstallprompt", (e) => {
                e.preventDefault();
                setDeferredPrompt(e);
            });
        } else {
            setCookie("pwa-install-status", "dismissed" , {path: "/"});
        }
    }, [isStandalone]);

    const _handleInstall = () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === "accepted"){
                setCookie("pwa-install-status", "accepted" , {path: "/"});
            } else {
                setCookie("pwa-install-status", "dismissed" , {path: "/"});
            }
        });
    };

    const _handleClose = () => setCookie("pwa-install-status", "dismissed" , {path: "/"});

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={!isStandalone && deferredPrompt && cookies["pwa-install-status"] !== "dismissed"}
            timeout={300}
            classNames="fade-in"
            mountOnEnter
            unmountOnExit
        >

            <div
                className="fixed z-20 bottom-[70px] left-0 flex md:hidden justify-between items-center gap-2 w-full h-[70px] bg-dark shadow-3xl px-4 py-2"
                ref={nodeRef}
            >

                <div className="flex justify-start items-center gap-x-4">

                    <Image
                        src="/assets/images/logo.png"
                        alt='logo'
                        width={32}
                        height={32}
                        className="bg-light min-w-[32px] min-h-[32px] rounded-full"
                    />

                    <h3 className="text-xs text-light">
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
                    onClick={_handleClose}
                >
                    <LuX
                        size={16}
                        className="text-current"
                    />
                </IconButton>

            </div>

        </CSSTransition>
    )
}

export default InstallBanner;