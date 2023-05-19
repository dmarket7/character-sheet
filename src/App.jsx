import { useState } from 'react'
import { TextInput, Grid, Flex } from '@mantine/core'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const StyledTextInput = (props) => {
        return (
            <TextInput
                {...props}
                variant="filled"
                inputWrapperOrder={['input', 'label']}
                ta="left"
            />
        );
    }

    return (
        <>
            <Grid>
                <Grid.Col span={4}>
                    <Flex align="center" justify="center" mih="100%">
                        <StyledTextInput
                            label="Character Name"
                            sx={{ border: '1px solid black' }}
                            w="100%"
                            p="8px"
                        />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8} sx={{ border: '1px solid black' }}>
                    <Grid>
                        <Grid.Col span={4}>
                            <StyledTextInput
                                label="Class & Level"
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <StyledTextInput
                                label="Background"
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <StyledTextInput
                                label="Player Name"
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <StyledTextInput
                                label="Race"
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <StyledTextInput
                                label="Alignment"
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <StyledTextInput
                                label="Experience Points"
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default App
