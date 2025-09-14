import Forecast from './components/Forecast'
import Search from './components/Search'
import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSumbit } =
    useForecast()

  return (
    <main className="flex h-[100vh] w-full items-center justify-center bg-gradient-to-br from-[#fce5d8] to-[#ffffff]">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSumbit}
        />
      )}
    </main>
  )
}

export default App
