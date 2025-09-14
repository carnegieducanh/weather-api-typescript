const Header = (): JSX.Element => {
  return (
    <div>
      {' '}
      <h1 className="text-4xl font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1>
      <p className="mt-2 text-sm">
        Enter below a place you want to know the weather of and select an option
        from the dropdown
      </p>
    </div>
  )
}

export default Header
