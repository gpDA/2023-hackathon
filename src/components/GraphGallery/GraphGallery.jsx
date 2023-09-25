import { useState } from 'react'
import styles from './GraphGallery.module.scss';
import { FileUploader } from "react-drag-drop-files";
import * as d3 from "d3";
import Bar from "../Bar/Bar";

const defaultData = [
    { Country: 'US', Value: 100 },
    { Country: 'S. Korea', Value: 85 },
    { Country: 'Italy', Value: 72 },
    { Country: 'Japan', Value: 80 },
]

const graphGallery = () => {
    // const [data, setDataCB] = useState(originalData);
    const [barData, setBarData] = useState(defaultData);

    //  TODO: rename component name
    //  TODO: give the appropriate flag

    const test = () => {
        console.log('>Test')
    }

    const handleFileUpload = async (file) => {

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {

            const data = event.target.result;
            const parsedData = JSON.parse(data);
            setBarData(parsedData);
            // TODO: React setState
        });
        reader.readAsText(file);
    }

    return (
        <div className={styles['graphGallery']}>
            <div className={styles['graph-wrapper']}>
                <div className={styles['graph']}>
                    <Bar 
                        data={barData} 
                        setDataCB={test} 
                        shouldDisplay={false}
                        width={200}
                        height={150}
                    />
                </div>
                <div className={styles['graph']}>
                    test 123
                </div>                
            </div>
            <div className={styles["drag-drop-wrapper"]}>
                <FileUploader handleChange={handleFileUpload} name="file" types={["JSON"]} />
            </div>
        </div>
      );
}

export default graphGallery;