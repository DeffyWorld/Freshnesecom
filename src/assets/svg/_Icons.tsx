import React from 'react'



export function User({
    width = '24px',
    height = '24px',
    fill = 'none',
    ...props
}: React.SVGProps<SVGSVGElement> ) {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            >

            <path
                d="M3 21.9999L3.79 19.1199C6.4 9.6199 17.6 9.6199 20.21 19.1199L21 21.9999"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 11.98C14.7614 11.98 17 9.74139 17 6.97997C17 4.21854 14.7614 1.97997 12 1.97997C9.23858 1.97997 7 4.21854 7 6.97997C7 9.74139 9.23858 11.98 12 11.98Z"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
            />
        </svg>
    )
}



export function Basket({
    width = '24px',
    height = '24px',
    fill = 'none',
    ...props
}: React.SVGProps<SVGSVGElement> ) {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            >
                
            <path
                d="M18.39 20.8499H6.61004C6.29236 20.8502 5.98375 20.7439 5.73358 20.5481C5.4834 20.3523 5.3061 20.0783 5.23004 19.7699L2.58004 9.15987C2.55418 9.05658 2.55222 8.94875 2.57432 8.84459C2.59642 8.74044 2.64199 8.64269 2.70756 8.5588C2.77313 8.47491 2.85698 8.40708 2.95272 8.36048C3.04845 8.31387 3.15356 8.28973 3.26004 8.28987H21.74C21.8465 8.28973 21.9516 8.31387 22.0474 8.36048C22.1431 8.40708 22.2269 8.47491 22.2925 8.5588C22.3581 8.64269 22.4037 8.74044 22.4258 8.84459C22.4479 8.94875 22.4459 9.05658 22.42 9.15987L19.77 19.7699C19.694 20.0783 19.5167 20.3523 19.2665 20.5481C19.0163 20.7439 18.7077 20.8502 18.39 20.8499V20.8499Z"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.2999 3.14993L7.3999 8.28993"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.3804 3.14993L17.2904 8.28993"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}



export function Lupa({
    width = '16px',
    height = '16px',
    fill = 'none',
    ...props
}: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.19303 10.4333C10.7704 10.4333 12.8597 8.34394 12.8597 5.76661C12.8597 3.18928 10.7704 1.09995 8.19303 1.09995C5.61571 1.09995 3.52637 3.18928 3.52637 5.76661C3.52637 8.34394 5.61571 10.4333 8.19303 10.4333Z"
                stroke="#151515"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
            />
            <path
                d="M4.81319 9.24002L1.68652 12.3667"
                stroke="#151515"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
            />
        </svg>
    )
}



export function Star({
    width = '24px',
    height = '24px',
    fill = '#151515',
    ...props
}: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={width}
            height={height}
            fill='none'
            viewBox="0 0 21 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.42397 2.65829C9.48153 2.47575 9.59578 2.31632 9.75014 2.20315C9.90449 2.08998 10.0909 2.02896 10.2823 2.02896C10.4737 2.02896 10.6601 2.08998 10.8145 2.20315C10.9688 2.31632 11.0831 2.47575 11.1406 2.65829L12.6906 7.42495H17.6906C17.8889 7.41746 18.0841 7.47507 18.2465 7.58899C18.409 7.7029 18.5296 7.86686 18.5901 8.0558C18.6505 8.24474 18.6475 8.44829 18.5814 8.63533C18.5153 8.82238 18.3897 8.98263 18.224 9.09162L14.1656 12.0333L15.7156 16.8083C15.7769 16.9902 15.7785 17.1869 15.72 17.3697C15.6616 17.5526 15.5463 17.7119 15.3908 17.8245C15.2354 17.9371 15.048 17.9971 14.8561 17.9957C14.6642 17.9943 14.4777 17.9315 14.324 17.8166L10.2573 14.8416L6.19897 17.7916C6.04522 17.9065 5.85877 17.9693 5.66684 17.9707C5.4749 17.9721 5.28754 17.9121 5.13211 17.7995C4.97668 17.6869 4.86133 17.5276 4.80289 17.3447C4.74445 17.1619 4.746 16.9652 4.8073 16.7833L6.3573 12.0083L2.29897 9.06662C2.1332 8.95763 2.00768 8.79738 1.94157 8.61033C1.87546 8.42329 1.8724 8.21975 1.93286 8.0308C1.99333 7.84186 2.11398 7.6779 2.2764 7.56398C2.43881 7.45007 2.63406 7.39246 2.8323 7.39995H7.8323L9.42397 2.65829Z"
                fill={fill}
            />
        </svg>
    )
}



export function ChevronLeft({
    width = '32px',
    height = '32px',
    fill = 'white',
    ...props
}: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.9332 9.62671L13.4532 15.1067C13.2048 15.3565 13.0654 15.6945 13.0654 16.0467C13.0654 16.399 13.2048 16.7369 13.4532 16.9867L18.7865 22.32"
                stroke={fill}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
            />
        </svg>
    );
}



export function ChevronRight({
    width = '32px',
    height = '32px',
    fill = 'white',
    ...props
}: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.0664 22.3734L18.5464 16.8934C18.7947 16.6436 18.9341 16.3056 18.9341 15.9534C18.9341 15.6011 18.7947 15.2632 18.5464 15.0134L13.2131 9.68005"
                stroke={fill}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
            />
        </svg>
    );
}



export function ChevronRightAlt() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.5332 11.1865L9.2732 8.44651C9.39737 8.3216 9.46706 8.15263 9.46706 7.97651C9.46706 7.80039 9.39737 7.63142 9.2732 7.50651L6.60654 4.83984"
                stroke="#6A983C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
            />
        </svg>
    );
}



export function GridView({
    color,
    ...props
}: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.33301 8H14.6663"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 1.33331V14.6666"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}



export function ListView({
    color,
    ...props
}: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.33301 4.66663H14.6663"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.33301 8H14.6663"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.33301 11.3333H14.6663"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}



export function ChekboxChecked() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 2.00003H4C2.89543 2.00003 2 2.89546 2 4.00003V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4.00003C22 2.89546 21.1046 2.00003 20 2.00003Z"
                fill="#6A983C"
                stroke="#46760A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
            />
            <path
                d="M6.55957 12.85L9.61957 15.91L17.4396 8.09003"
                stroke="#FDFDFD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}