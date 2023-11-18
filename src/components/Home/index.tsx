/* eslint-disable react/react-in-jsx-scope */
import BookCardList from '../BookCardList';
import ImageCover from '../ImageCover';

const Home: React.FC = () => {
  return (
    <>
      {/* <ImageCover /> */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <BookCardList
          styles={{
            width: '50%',
            textAlign: 'center',
            backgroundColor: '#F8F8F8',
            marginTop: '10vh',
          }}
          title="Peykhang recommendation of the month"
        />
      </div>
    </>
  );
};

export default Home;
