import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { AnimatedTooltip } from '../ui/animated-tooltip';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface GistEmbedProps {
    gistId: string;
    showTools?: boolean;
    route?: string
}

interface GistFile {
    filename: string;
    content: string;
    language: string;
}

const GistEmbed: React.FC<GistEmbedProps> = ({ gistId, showTools = true, route }) => {
    const [gistFiles, setGistFiles] = useState<GistFile[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/gists/${gistId}`)
            .then(response => response.json())
            .then(data => {
                const files = Object.values(data.files).map((file: any) => ({
                    filename: file.filename,
                    content: file.content,
                    language: file.language ? file.language.toLowerCase() : 'javascript',
                }));
                setGistFiles(files);
            })
            .catch(error => console.error('Error fetching Gist:', error))
            .finally(() => setLoading(false));
    }, [gistId]);

    const copyToClipboard = (content: string) => {
        navigator.clipboard.writeText(content)
            .then(() =>
                toast.dark('Code copied to clipboard!.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize:"12px"
                    },
                })
            )
            .catch(err => console.error('Failed to copy:', err));
    };

    return (
        <div>
            {loading ? (<>
                <p>loading..</p>
            </>) : (<>
                <ToastContainer />
                {gistFiles.map(file => (
                    <div key={file.filename} className='py-1'>
                        <div className='flex justify-between items-center'>
                            <p className="text-gray-500 whitespace-normal dark:text-gray-400 text-xs">{file.filename}</p>

                            <div className='flex gap-1'>
                                {showTools && (<>
                                    <AnimatedTooltip
                                        Name="View"
                                        designation="Click to view"
                                        child={
                                            <Link href={`/${route}/${gistId}`} >
                                                <button
                                                    type="button"
                                                    // onClick={() => copyToClipboard(file.content)}
                                                    className="text-gray-900 flex justify-center animate-shimmer bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-eye"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        }
                                    />
                                </>)}
                                <AnimatedTooltip
                                    Name="Copy"
                                    designation="Click to Copy"
                                    child={
                                        <button type="button" onClick={() => copyToClipboard(file.content)} className="text-gray-900 flex justify-center animate-shimmer  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                            </svg>
                                        </button>
                                    }
                                />
                            </div>
                        </div>
                        
                        <CodeMirror
                            value={file.content}
                            height="auto"
                            theme={dracula}
                            extensions={[]}
                            readOnly
                            style={{
                                fontSize: "10px",
                            }}
                        />
                    </div>
                ))}
            </>)}

        </div>
    );
};

export default GistEmbed;