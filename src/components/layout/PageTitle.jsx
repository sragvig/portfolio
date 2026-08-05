function PageTitle({ children }) {
  return (
    <h2 className="absolute top-10 left-1/2 -translate-x-1/2 text-sm tracking-[0.4em] uppercase text-gray-400">
      {children}
    </h2>
  );
}

export default PageTitle;