import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../../components/Menu';
import DeleteAllModal from '../../components/Modal';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import { tweets } from '../../services/tweetsService';
import * as ModalsActions from '../../store/actions/modals';
import * as TweetsActions from '../../store/actions/tweets';
import { PAGE_NAMES } from '../../utils/constants';
import withRouter from '../helpers/withRouter';

const UIShell = ({ children }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pages.currentPage);
  const deleteAllModalStatus = useSelector((state) => state.modals.deleteAllModalStatus);

  const handleDeleteAll = () => {
    if (currentPage.name === PAGE_NAMES.HOME) {
      dispatch(TweetsActions.clearAllTweetsList());
    } else if (currentPage.name === PAGE_NAMES.LIKE) {
      dispatch(TweetsActions.clearLikedTweetsList());
    }

    dispatch(ModalsActions.toggleDeleteModalStatus());
  };

  useEffect(() => {
    const subscriber = tweets.subscribe((observer) => {
      observer.id = `${observer.account}-${observer.timestamp}`;
      observer.liked = false;

      dispatch(TweetsActions.setNewTweetsList(observer));
    });

    return () => subscriber.unsubscribe();
  }, []);

  return (
    <section className="twitter-like-app">
      <section className="twitter-like-app__tweets-list">
        <TopBar />
        {children}
        <Menu />
      </section>

      <section className="twitter-like-app__sidebar">
        <Sidebar />
      </section>

      <DeleteAllModal
        open={deleteAllModalStatus}
        modalHeading="Delete all Tweets?"
        modalAriaLabel="This can&#39;t be undone and it will be removed from your profile,
          the timeline of any accounts that follow you, and from Twitter search results."
        danger
        primaryButtonText="Delete All"
        secondaryButtonText="Cancel"
        onRequestSubmit={handleDeleteAll}
        onSecondarySubmit={() => dispatch(ModalsActions.toggleDeleteModalStatus())}
      />
    </section>
  );
};

export default withRouter(UIShell);
