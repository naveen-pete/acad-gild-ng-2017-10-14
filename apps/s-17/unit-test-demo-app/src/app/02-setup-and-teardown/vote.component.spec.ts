import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  // runs before every test
  beforeEach(() => {
    // set up
    component = new VoteComponent();
  });

  // runs after every test
  afterEach(() => {
    // tear down
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
