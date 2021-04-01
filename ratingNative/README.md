# Rating Component for React-Native

# 1) copy rating file in your project

# 2) attachs ICONS FontAwesome in Rating File

# 3) import and call Rating in your ui component

# 4) if you want only display call it like this
# pass it 2 props rating 0 to 5 also allow you to pass 0.5 to 4.5
# pass it style object fontSize and color margin padding ect if you not pass so rating apply default styles from rating file

    <Rating 
    rating={3.5}
    ratingIconStyle={styles.ratingIconStyle}
    />

# 5) if you want display and change rating from ui you can pass rating from your state and onChangeRating prop
# onChangeRating props send you responce when user click on stars
# you can pass your function to update rating in your state in onChangeRating props like this

   <Rating 
    rating={this.state.rating}
    onChangeRating={(rat) => this.setState({rating: rat})}
    ratingIconStyle={styles.ratingIconStyle}
    />
