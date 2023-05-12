import { useState } from 'react'
import { TextInput, Grid, Flex } from '@mantine/core'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Grid>
                <Grid.Col span={4}>
                    <Flex align="center" justify="center" mih="100%">
                        <TextInput label="Character Name" sx={{ border: '1px solid black' }} w="100%" p="8px"/>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8} sx={{ border: '1px solid black' }}>
                    <Grid>
                        <Grid.Col span={4}>
                            <TextInput label="Class & Level"/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput label="Background"/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput label="Player Name"/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput label="Race"/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput label="Alignment"/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput label="Experience Points"/>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default App
