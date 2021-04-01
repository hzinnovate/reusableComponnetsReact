import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { ICONS } from '../../../constants';

export const Rating = (props) => {
    const { onChangeRating, rating, ratingIconStyle } = props;

    const [ratingArr, setRatingArr] = useState([])
    useEffect(() => {
        let rat = rating
        let arr = []
        for (let i = 0; i < 5; i++) {
            if (rat >= 1) {
                rat = rat - 1
                arr.push(1)
            } else if (rat > 0 && rat < 1) {
                arr.push(0.5)
                rat = 0
            } else {
                arr.push(0)
            }
        }
        setRatingArr(arr)
    }, [rating])
    return (
        <View style={styles.ratingContainer}>
            {!!ratingArr.length && ratingArr.map((item, index) =>
                <TouchableOpacity
                    onPress={() => onChangeRating ? onChangeRating(index + 1) : null}
                    activeOpacity={0.7}
                >
                    {!!item ?
                        item === 0.5 ?
                            <ICONS.FontAwesome name="star-half-o" style={[styles.stars, ratingIconStyle]} />
                            :
                            <ICONS.FontAwesome name="star" style={[styles.stars, ratingIconStyle]} />
                        :
                        <ICONS.FontAwesome name="star-o" style={[styles.stars, ratingIconStyle]} />
                    }
                </TouchableOpacity>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    ratingContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    stars: { textAlign: 'center', paddingVertical: 40, margin: 5, fontSize: 24, color: 'black' },
})