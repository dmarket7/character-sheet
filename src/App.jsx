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
                        <TextInput
                            label="Character Name"
                            sx={{ border: '1px solid black' }}
                            w="100%"
                            p="8px"
                            variant="filled"
                            inputWrapperOrder={['input', 'label']}
                        />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8} sx={{ border: '1px solid black' }}>
                    <Grid>
                        <Grid.Col span={4}>
                            <TextInput
                                label="Class & Level"
                                variant="filled"
                                inputWrapperOrder={['input', 'label']}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput
                                label="Background"
                                variant="filled"
                                inputWrapperOrder={['input', 'label']}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput
                                label="Player Name"
                                variant="filled"
                                inputWrapperOrder={['input', 'label']}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput
                                label="Race"
                                variant="filled"
                                inputWrapperOrder={['input', 'label']}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput
                                label="Alignment"
                                variant="filled"
                                inputWrapperOrder={['input', 'label']}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <TextInput
                                label="Experience Points"
                                variant="filled"
                                inputWrapperOrder={['input', 'label']}
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default App
