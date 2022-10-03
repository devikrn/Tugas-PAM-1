//implements Async/Await way
const getUserAsync = async (name) => {
  const user = await getUserByName(name);
  if (user.role == 'guest') {
    return user;
  } else {
    return false;
  }
}