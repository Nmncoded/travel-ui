import { Colors, fontSize, screenPadding } from '@/constants/Colors'
import { Button, StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenPadding.horizontal,
	},
	text: {
		fontSize: fontSize.base,
		color: Colors.text,
	},
  button : {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }
})

export const utilsStyles = StyleSheet.create({
	centeredRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	slider: {
		height: 7,
		borderRadius: 16,
	},
	itemSeparator: {
		borderColor: Colors.textMuted,
		borderWidth: StyleSheet.hairlineWidth,
		opacity: 0.3,
	},
	emptyContentText: {
		...defaultStyles.text,
		color: Colors.textMuted,
		textAlign: 'center',
		marginTop: 20,
	},
	emptyContentImage: {
		width: 200,
		height: 200,
		alignSelf: 'center',
		marginTop: 40,
		opacity: 0.3,
	},
})
