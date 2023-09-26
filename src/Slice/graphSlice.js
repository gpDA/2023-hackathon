import { createSlice } from '@reduxjs/toolkit'

const defaultBarData = [
  { Country: 'US', Value: 100 },
  { Country: 'S. Korea', Value: 85 },
  { Country: 'Italy', Value: 72 },
  { Country: 'Japan', Value: 80 },
]

const initialState = {
  bar: {data: defaultBarData, key: 'Country', value: 'Value'}, // bar, key, value
  otherConfig: [{'testY': 'testY'}]
}

export const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    updateGraph: (state, action) => {
      const {key, value} = action.payload;
      const [key1, key2] = Object.keys(value[0])
      console.log(state[key]);
      state[key].data = value;
      state[key].key = key1;
      state[key].value = key2;
    }
  },
})

export const { updateGraph } = graphSlice.actions

export default graphSlice.reducer