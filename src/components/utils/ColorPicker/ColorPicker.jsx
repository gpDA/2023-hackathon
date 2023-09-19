import './ColorPicker.scss';
import { Wheel } from '@uiw/react-color';

const ColorPicker = ({width = 50, height = 50, id, color, handleChange}) => {

    return (
        <>
            <Wheel width={width} height={height} color={color} onChange={(color) => handleChange(id, { ...color, ...color.hsva })} />
        </>
      );
}

export default ColorPicker;