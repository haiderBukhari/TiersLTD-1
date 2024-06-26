export function MiningComponent() {
    const cardStyle = {
        position: 'relative',
        padding: '20px',
        border: '2px solid transparent', // Initial border setup
        borderImage: 'linear-gradient(to bottom, #1D9F84 0%, #5B45B7 100%) 1',
        boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
    };
    return (
        <div style={cardStyle} className="flex flex-col items-center px-5 py-5 text-3xl font-extrabold leading-10 text-center text-white border-2 border-solid bg-[#1A1B23] max-w-[346px] rounded-[32px]">
            <div>Antminer S19</div>
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd304a621fdb08831fa54067a0fceda299567d151941140a0e370b203b591792?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd304a621fdb08831fa54067a0fceda299567d151941140a0e370b203b591792?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd304a621fdb08831fa54067a0fceda299567d151941140a0e370b203b591792?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd304a621fdb08831fa54067a0fceda299567d151941140a0e370b203b591792?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd304a621fdb08831fa54067a0fceda299567d151941140a0e370b203b591792?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd304a621fdb08831fa54067a0fceda299567d151941140a0e370b203b591792?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd304a621fdb08831fa54067a0fceda299567d151941140a0e370b203b591792?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd304a621fdb08831fa54067a0fceda299567d151941140a0e370b203b591792?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="self-start mt-3 aspect-[1.33] w-[80%] mx-auto"
            />
            <div className="self-stretch mt-5 text-base leading-6 text-slate-400">
                Bitmain S19 Pro mit einer Systemleistung von 110TH/S und einem Stromverbrauch von 3500w{" "}
            </div>
            <div className="mt-4">1290.- CHF </div>
            <div className="justify-center px-7 py-5 mt-6 text-white whitespace-nowrap rounded-lg bg-blue-950">
                Auswählen
            </div>
        </div>
    );
}

