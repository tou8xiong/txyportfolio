



export default function DesignImg() {

    const dsimg = [
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",

    ]

    return (
        <div>
            <div className="flex flex-wrap gap-10 justify-center p-8">
                {dsimg.map((src, index) => (
                    <img key={index} src={src} alt="Design Image" className="w-[400px]" />
                ))}
            </div>
        </div>

    )
}