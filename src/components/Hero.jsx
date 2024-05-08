import { useState } from "react";
import { Header } from "./Header/Header";

export function Hero() {
    const [show, setShow] = useState(false);
    return (
        // <div className="flex flex-col justify-center items-center text-center mt-20">
        //     <div style={{fontFamily: "Inter"}} className="flex flex-col justify-center items-center px-5 w-full max-md:max-w-full max-w-[780px]">
        //         <div className="w-full text-7xl font-black text-white leading-[89px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
        //             We make crypto mining simple
        //         </div>
        //         <div className="self-center mt-4 text-base leading-6 text-slate-400 max-md:max-w-full">
        //             Geniessen Sie die Vorteile von einem Mining Host.{" "}
        //         </div>
        //     </div>
        //     <div className="justify-center self-center px-7 py-5 mt-8 text-base font-semibold leading-4 text-white rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50 max-md:px-5">
        //         Start Hosting
        //     </div>
        // </div>
        <div className="flex flex-col justify-center text-center">
            <div className="flex overflow-hidden relative flex-col items-center pt-0 md:pb-20 w-full md:min-h-[711px] max-md:px-5">
                <Header show={show} setShow={setShow} />
                {!show && (
                    <>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e61d6e915e53fdbc675c448976084b65671aebdc7afc0700cc5c2d2e950f14c?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e61d6e915e53fdbc675c448976084b65671aebdc7afc0700cc5c2d2e950f14c?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e61d6e915e53fdbc675c448976084b65671aebdc7afc0700cc5c2d2e950f14c?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e61d6e915e53fdbc675c448976084b65671aebdc7afc0700cc5c2d2e950f14c?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e61d6e915e53fdbc675c448976084b65671aebdc7afc0700cc5c2d2e950f14c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e61d6e915e53fdbc675c448976084b65671aebdc7afc0700cc5c2d2e950f14c?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e61d6e915e53fdbc675c448976084b65671aebdc7afc0700cc5c2d2e950f14c?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e61d6e915e53fdbc675c448976084b65671aebdc7afc0700cc5c2d2e950f14c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="hidden md:block object-cover absolute inset-0 size-full mt-[-30px]"
                        />
                        <div className="flex relative flex-col mb-10 max-w-full w-[879px] max-md:mb-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b9a0c1f4b561041136cae7aa80d5ea6fe8975d3e02bfa5c0a8336fc2551f093?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="self-end aspect-square fill-white w-[74px]"
                            />
                            <div className="flex flex-col max-md:max-w-full">
                                <div style={{ fontFamily: "Inter" }} className="flex flex-col max-md:max-w-full">
                                    <div className="text-8xl font-black text-white leading-[111px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                                        We make crypto mining simple
                                    </div>
                                    <div className="self-center mt-4 text-base leading-6 text-slate-400 max-md:max-w-full">
                                        Geniessen Sie die Vorteile von einem Mining Host.{" "}
                                    </div>
                                </div>
                                <div className="justify-center self-center px-7 py-5 mt-8 text-base font-semibold leading-4 text-white rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50 max-md:px-5">
                                    Start Hosting
                                </div>
                            </div>
                        </div>
                    </>)}
            </div>
        </div>

    );
}

