'use client';
import Footer from "@/components/customUI/footer";
import GistEmbed from "@/components/customUI/gist";



const CodeShowCase = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <div className="overflow-y-auto p-2">
                <div className="min-h-screen">
                <GistEmbed gistId={params.id} showTools={false} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default CodeShowCase;