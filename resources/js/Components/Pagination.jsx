import { Link } from "@inertiajs/react";

export default function Pagination({links}) {
    return (
        <nav className="text-center mt-4">
            {links.map(link => (
                <Link
                preserveScroll
                href={link.url || '#'}
                key={link.label}
                className={"inline-block px-4 py-2 mx-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300" + (link.active ? ' bg-gray-400 ' : ' ' ) + (!link.url ? ' !text-gray-500 cursor-not-allowed' : '' )}
                dangerouslySetInnerHTML={{__html: link.label}}>
                </Link>
            ))}
        </nav>
    );
}
