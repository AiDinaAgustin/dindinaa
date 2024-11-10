export default function ContainerLayout({ className, children, ...props }) {
  return (
    <div
      className={`container text-white mx-auto my-5 lg:px-32 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
