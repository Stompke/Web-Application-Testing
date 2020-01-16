export const swing = (typeOfHit) => {
    if(typeOfHit === 'strike') {
      if (count.strike === 2) {
        setCount({
          strike: 0,
          ball: 0
        })
      } else {
        setCount({
          ...count,
          strike: count.strike + 1
        })
      }

    } else if(typeOfHit === 'ball') {
      if(count.ball === 3) {
        setCount({
          strike: 0,
          ball: 0
        })
      } else {
        setCount({
          ...count,
          ball: count.ball + 1
        })
      }
    } else if(typeOfHit === 'hit') {
      setCount({
        strike: 0,
        ball: 0
      })
    } else if(typeOfHit === 'foul'){
      if(count.strike === 2) {
        console.log('still good bro!')
      } else {
        setCount({
          ...count,
          strike: count.strike + 1,
        })
      }
    }
  }