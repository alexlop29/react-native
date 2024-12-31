// default
import React from 'react';
import { StyleSheet } from 'react-native';

// comps
import { Box } from '../ui/box';
import { Icon } from '../ui/icon';
import { Text } from '../ui/text';

// icons
import { ThumbsUp } from 'lucide-react-native';
import { CheckIcon } from 'lucide-react-native';

// styles
import { Colors } from '@/constants/Colors';
const styled = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        backgroundColor: Colors.orange.background,
        padding: 16,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    }
});

const Finish = () => {
  return (
    <Box style={styled.container}>
        <Box style={styled.leftContainer}>
            <Icon as={ThumbsUp} />
            <Text>Click here to finish it</Text>
        </Box>
        <Box>
            <Icon as={CheckIcon} />
        </Box>
    </Box>
  )
}

export { Finish };
