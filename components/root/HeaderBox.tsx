/** `type = "title"` and `user` props are optional */
export function HeaderBox({ type = "title", title, subtext, user }: HeaderBoxProps) {
   return (
      <div className="header-box">
         <h1 className="header-box-title">
            {title}
            {type === "greeting" && (
               // &nbsp; is a non-breaking space
               <span className="text-bankGradient">&nbsp;{user}</span>
            )}
         </h1>
         <p className="header-box-subtext">{subtext}</p>
      </div>
   )
}
