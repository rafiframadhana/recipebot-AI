import styled from "styled-components";

const Switch = (props) => {
  return (
    <StyledWrapper>
      <div className="container">
        <label className="toggle" htmlFor="switch">
          <input
            id="switch"
            className="input"
            type="checkbox"
            checked={props.darkMode}
            onChange={props.toggleTheme}
          />
          <div className="icon icon--moon">
            <svg
              height={32}
              width={32}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="icon icon--sun">
            <svg
              height={32}
              width={32}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle {
    position: absolute;
    top: 45px;
    right: 150px;
    transform: translateY(-73%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  .toggle:hover {
    opacity: 0.8;
  }

  .input {
    display: none;
  }

  .icon {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    transition: transform 500ms;
  }

  .icon--moon {
    transition-delay: 200ms;
  }

  .icon--sun {
    transform: scale(0);
  }

  #switch:checked + .icon--moon {
    transform: rotate(360deg) scale(0);
  }

  #switch:checked ~ .icon--sun {
    transition-delay: 200ms;
    transform: scale(1) rotate(360deg);
  }

  /* Dark mode styling */
  body.dark {
    background-color: #121212;
    color: white;
  }
`;

export default Switch;
