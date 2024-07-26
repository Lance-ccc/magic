var str = `
(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        "06d8846050cfb57dcd78": function(e, t, n) {
            "use strict";
            var c = n("98bae3dbabd51089d613"),
                r = n("275976081ce1abf67779"),
                a = n("b912ecc4473ae8a2ff0b"),
                i = n.n(a),
                u = n("49a47d064cfbf2949ee5"),
                o = function(e) {
                    var t = e.prefixCls,
                        n = e.type,
                        a = e.size,
                        o = e.color,
                        s = Object(c.f)(e, ["prefixCls", "type", "size", "color"]);
                    u(!!n, "type should be required for icon");
                    var l = i()(t, t + "-" + n),
                        d = {
                            color: o
                        };
                    return a && (d.fontSize = a), r.createElement("i", Object(c.a)({
                        className: l,
                        style: d
                    }, s))
                };
            o.defaultProps = {
                prefixCls: "ai-icon",
                onClick: function() {}
            };
            var s = o;
            t.a = s
        },
        "1f54dddadd867e24c69b": function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n("98bae3dbabd51089d613"),
                r = n("275976081ce1abf67779"),
                a = n.n(r),
                i = n("8880da179a969fe34488"),
                u = n("3da094724f76fbfd5342"),
                o = n("06d8846050cfb57dcd78"),`
                s = function() {
                    return a.a.createElement("div", {
                        className: "nodata"
                    }, a.a.createElement(o.a, {
                        type: "zanwujilu",
                        color: "#DDD",
                        size: 60
                    }), a.a.createElement("div", {
                        className: "text"
                    }, "暂无记录"))
                },
                l = n("d7e9eb5549c8706aa74e"),
                d = n("7324f8fb03a95b5e63cb"),
                f = function(e) {
                    d.f.show({
                        content: a.a.createElement(m, {
                            type: l.f.FAILURE,
                            content: e
                        }),
                        duration: e.length > 30 ? 1e4 : e.length > 10 ? 5e3 : 2e3
                    })
                },
                m = function(e) {
                    var t = e.content,
                        n = e.type;
                    return a.a.createElement("div", {
                        className: "toast-content-container"
                    }, a.a.createElement("img", {
                        src: n === l.f.FAILURE ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4yIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2MDc0NDc5M0U0MTExRUU5MzM4RUI2REFBNDlFODE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2MDc0NDdBM0U0MTExRUU5MzM4RUI2REFBNDlFODE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDYwNzQ0NzczRTQxMTFFRTkzMzhFQjZEQUE0OUU4MTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDYwNzQ0NzgzRTQxMTFFRTkzMzhFQjZEQUE0OUU4MTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7WaJP3AAAYRUlEQVR42uyde3Bc1X3Hf797V3t3tbYGLKeOE+I65mEehhjEI9iQaoZYWmmlTlJQAkl5JdCZzvA2bQiUEEIJtCUQSP9qnBdJSKhhwqDXriCthlSQONgQGwcoiuM6dBwXyw62Vtpd7d5fz1kttgUyeuzjnrv7/cys98qSVru/8/vc8zv3nnsuEzAaIeJke/sSy3I/aru0XFiWqEcju7yYmBrVjyxWP9SotiPqOUgWOflnEkf9arDwKhm1nVY/kyGXJp+Fkup5RH1zr9oeEUv2svCIeuzJWbTTda3fR/r69nD+LQBTYYTAEFG7mheMj4ZXse2ezkJnqP86QT2WFx4hj95WSj12Fh7DwrRVXNkajmS288bBUbQaBK5NWVtaIqk6PtcSXivsnqWaQQu7wkftoXvlHeppK4u1xWUZCk3IJh4YSKJ1IXDVcbCt7QNBS5pFRAnLa5lktfrvQJV9zKwQv8wiQ8w8lHF5cGF//1tofQjsw3K4yx4fP3iuSuY21VdFmensGoy12l/Ri+pT96udVjwcXriJN27MITsgsKnShjPJA+2qnLxEhbVFBXYRojKl5t6n/h1Qw4YngpGGPiXzOKICgb1NyrY2J8Nu1GX6rApkp/qvBYjKrBhVQndbQo8HxYpzf38aIYHAFWMs1rLGFr5GmC5WXzYgIkVxgIWezLFsqO8deB7hgMDl6W1bWxelA3SF2rxWPU5FRMrCdvXY4GTpUU4k9iEcELhoMp3Rc3IiN6leQve2DiJSEdKqunnSZv5msDv+a4QDAs+tt9XTlmJRNaaV9erLTyAinvIcsTzg9Az0YFYYBH5/cdvanLSVu5KYb1GpshIRMSpTXyeRBx3X/gEOekHgqeI2NdWlly7+opL2DvXlcYiI0bypsvZeZ/fe7/DmzRMQuJbFbW4OpCLBK5j4Tpqccwz8w04huSeUzDzKg4NZCFxjpDtaLhHh+2jyogHgX4ZZ6DanL/EkBK4BUh3rTiSxvqU2W5H7VUWCbLou9HRiGAJXZ7kcSkWcL6sP/CXC6aCqLayE6J9CyfR9qqxOQeCq6XWj7SSkel1ZgRyvibTeoTL7+lBPvA8C+5jxzk8u45z9sPqUn0JS1yBCT4mduzHc/ewuCOyndmtqqsssaVwvnD+6XI9MrmnGWOSe4J6Rb1TjaaeqE3isveU8i/n7avNk5C44glddkavr+wZ+VU0fyqqqsW6sdb2S9xeQF0zDKTo3Uh3RW9ADm1Yy6yuFbNXrsnQiT8HMCcPdTk6uqoYrnnwv8FhH9HxL5KdqcxkyE8yBXS7zpfU98RdQQnuxE1U7n1R79O+UvM9BXjAPlunc0TkkPu7IfPnGD3z6osZgJvADtRlDHoIS0JsJZq9s+NnPRyBwuUvmtnVrLcvSJTOuGgKlLOn+4Ip7WX3/M0MoocuEKnduUPIOQl5Qhq7sIzq3dI5B4DIw3hG9j1gepupbEB2YQ0DnWD7XUEKXqLLp6rIzyQPfFqarkV+gYmIIfS8YabjW9MXo2XB5w+nkwcdxfhd4k4Dc7UQWftbkReiNFVhisWPTlOtWW2uRScBDRYYcsju5t3c/BJ4lYx0dH7ZkIq42VyGBgAG84nJdtL6n538h8AykotGVZMsAYXIGMItdlOOWUDz+uklvyqij0JmO1nOVvP8FeYGBLNO5mc9R9MDTy+sK/YfajCBXgMGMWkwXBXsSmyDwEWUz2zIkRI3ID+AD9qpy+gITymnPS2h9wEqPeSEv8BGLdc7mc7eWBdaniiyZSGDMC/w4JtZnSnQO16TA+Uka+fO8dBpyAfiUVTqHdS7XlMB6emR+hhUmaQDfI2t1LuucrhmB9dxmTI8EVYPK5XxO14LAqVjr/bgwAVRdP6xy2ourmCp6Gil/reXkJYEAVKvJN4b64o9UncCFlTQGCdfzguom67puc6VW9qiIwIU1rF4mrKQBaqIXpj9knOyZlVhjyyr/ZyEuLEAHeUFtwPQRnfOVWO2y7AKn26O3ElaPBLVHrJD7/i2hC4uuP4dxL6jZ8TDzJ8q5eHzZBM7f7iRALxGmSYLaZpeTpTPLdRuXspXQ+XsVQV4AlhVc8M8YWN8lEDOtAHinzpXOct0VseQldOH+vPoWn3VoOQAOMeGKXFjq+xOXtAeWpqa6ws21IS8AU9FufE87YqzAmSWN6wk31wbgaJxScMS8Enq885PL2LVfVZv1aCcAjj7KFCt3Srj72V1G9cCcsx+GvADMSH3BFXN64FSsVc+06kHbADBb8zgW6on3eS6wNDeH0pHQdrW1Aq0CwKzV2+EkU6fx4GDK0xI6FXFuh7wAzLnrWzHpjoc9cKpj3Ykk1ja16aBBDCAYJGv1WWR9/Hyyjj+e6NhFxJEIyZ/2k4yMkGzdSrlfPk8y/AZiZQZpsmlV6OnEsDcCt0cTxNKCdvAY2ya7JUr25/6a+NiZVzl1X3uVct/dQO5vtyN23pMI9SaiFRc43dFyiQhvRPw9HkktaqS6O+8iPvGkOf9u7umnKLvh35TRLgLpZRuydDk9A09UTGBpbg6kI44+53sCwu9hwy/7c6r7x/uUxIvm/Rruls00cc9XiSYmEFDvGHaS6VN4cDA711+c10GsVCR4BeT1WN6GBqq76+6i5M0nwFlNFLjuBgTUW04oOEVlF1jP5WTiOxFzbwncfCvxkg+WZgh90Tqy17UiqF7ukJVT85knPWeB00sXf1E9LUfIvcP62GqyzintbWrty68kcnAywUOWF9wqn8DS1uaQyD8g1t5iX/b50vcAqhS3W6MIrpcI3ZF3rFwCp1muUk39YUTaw1LrmGPIOm1VeXr2NRcgwN5y3KRjZRA4v0Qmyy2Iscfl81ln6/MO5XntU08jikQQZE8bWG6ey3K0sxY4HYvqJXJOQoQ97oGXLi1j8lglOzAG5l1Gryy4VuoSWm5FdA1gUWN5dxBFnpYCJbH41pIKnOmMnqOeLkRgDeiB68t8L+kwLuk2gAsLzpVG4JwrNyOmtVPDAe/JidxUEoH1jcnUiPqvENKa6eMRAhNaQehifXOEogUOZgKXEy4XBKDSOOkAXVG0wIprEUsAPOGaogQei7WsUU+nIo4AeMJpBQfnJ7AtfA1iWGvgIJZJzOTgUQXWczKF6WKEsNbAQSyjdqfKwfebH31UgTOBXJt6akAIAfCUhgy70TkL7Lr8GcQOAO9xmT47J4GlqyusCincHhQAMwY1ndrJWQucSR5oV08LEDoAjGBBwcnZCeyyXIKY1So4Cm1mGT29k9Y05bOtOm2s9VzLBRswsV1aJt2cQeDx8YPnqibENWUAmLVbXaTdnFFgFmlDuAAwUOJp3LSmGQJhZTMATGQaN6cIfLCt7QPMdDYiBYCBPbByUzt6VIGDljQTjmLU/G4emOtwwdHpBRaRtYhRzecIQmDy7vVdjk4VmBkCA2CywO9y9JDA0tISYZLVCBEAJtdHslq7+h6BUzadp54CCBEARhNI1fG57xHYYmsNYgNwEMt8LDlcRh8uoUmaEBqAg1h+2MUedtU6ot1OR2gA8MU+9vQpAktXs750cAUiA4AvWFFwdlLg8dHwKtROAPinDy44Oykw2y7KZwD8ZHDB2UmBhc5ASMAkOArtC4ELzr5zEOsEhAQUUgMh8AcnHCnwcsQDAF+Rd9aSyV0uBAbAZwJrd61ke/sS9UUI8QDAV4S0u5ZluR9FLADwH9pdy3ZRPoMjwVFov6DdtYRlCUIBDoOj0L7Z1Sp3tcCNCAUAvhS40WKXFyMUAPiwVlLuWqpiQg8MgD9HO416Igd6YAD8ieqBBT0wmDKyQgj801SNuoSOIBLgyLoM+KapIrqEdhAJAHyJo3vgIOIAgC974KAeA0NgAPw5BlYCk6CEBsCfBqsSmhg9MAD+rKGDFoIAgH/RJXQGYQDAlyV0RpfQaQQCAF+W0Gl9Ggk9MAC+9JdUD+wSemA/FU3jqfL+gfExBNkvKHfRA/uNfSPl3UHs24cY+6oHFkoiEj7qgf+4u4wvLiR79iDIvkkGSuoeeASR8FHV9OKLedHK8tqv/pYoOYog+6cHHtHngfciEj7a6f5p/6Ro5RD4+SEE2F/s1SU0emCfkfvJY2XZMeTi/Qiuv0roEUssQQ/stzL6pc3kbtlc2p3Cj35IlBpHcP3kr3LXYmH0wD4k++C/kLz1f6XZIQz+p+p9+xBUvw2BlbtaYBx29OVY+E808bWv5p+Lknfrb2jikYcQUH8KvMfKWbQTofCpxL/fQRM335B/nlfZ3N9LE1+5gyiDqQB+RLvLo+3tHwxwbjfC4WMCAbLbO8i+9HPEDQ0zi/+7Ycp+dwO5v3kZsfPzMErspaxvUZiOter5c7hDod8JhchqOoesj59P1vHHEy9qJKqvzx9hppERVS5vJfdXL0yehhKsPulzUk5voj7AqilTlC+jT0ZM/N6kKXKHfpF/gKpnp3b3nQv6MQ4GwGcC63/eEXgY8QDAT/AbhwQWpq0ICAD+QVi2HRY4Z21DSADwkcAFZ/MChxeMv0K4KQ4AvvG34OykwLxxUF9DtgNxAcAX7Cg4S4eXlRVCGQ2APzrgQ8esDgnMxJsRGADMh8Xa8h6BXRZczQ2ADzjS1UMChyZkk3rKIjwAGE224Oq7SuiBgaQQY3Y7ACaPfpWj2tX3CDxZW6OMBsDs8e9UR6cKzAyBATBZ4Hc5OkXgjMuDhAkdABhbQRccnV7ghf39b4nQi4gTAAbaq9zUjh5V4Mk+muIIFQAm1s/0nnV/3yOwMGNxYABM7IGZ4zMKHA4v3KQGwbjDFQAmyauc1G7OKDBv3JhTPz6AkAFglMIDk25OJTDdj1rCTwjTpQiaz4ZIJ55E9vlriFedTty4mPiYY0iSyfwtSd3fDZP7yxfIffklookJBMtnaCenHxZP53pXVzg9dkAv+78AofNB4yphA1+4hviklTPvx5XMuR//iHLPJIhcF8HzB6NOfcOfqR54fFYCa8ZjrY+pb16G2BmMbVPgb/6W7FjHnH/Vfe01yt57N8n+/Yij+ePfn4R7E5+bdud91L26Jf+O0BlMMEh1X7t3XvLm2/fkk6nuoW8RH3ccYml8+UyPH/V7R82PrK1PJx1A+Myk7sZbyPrY6uLGzIsXU91X7lYDJYyUDOZAUKz4nAXm/v40Cz2J+BlYObfFyPqL5pK8Fn/ow1R3w80IqqFoB7WLcxZYk2PZgBAaRjhM9ucvL22JtmYtWaeehtgayEwOvq/A9b0Dz6un3yKMZvW++vRQyV/3ss8juOaxveDg/AQu8G3E0RysNReU53XP+BjGwuYxYwU8o8CZYPaH6imNWBowHmpoIGvlyvK8uG2TdVYTgmwOaSdLjxYtcMPPfj4ijINZRvDBpfqK7vLtIJZ+CDE2BO0cJxL7ihY4v3Nm/iZCakAPrO/36+PXB3MoiGbp3KwEDnbHf62ecNPZqt9DIASG8FzBudIIXGjdBxBXj8uqfSO+fn0wa9e+MdufnLXATm+8W+2hX0dwPWTPH/PrqpRN4N27EWPvq6DX866VWmDWc6pFHkSEPeyB336b5I3/Ls+Luy7Jli0IsueNLA/yHBaWtOby2o5r/0A9vYkoe0fu+fKs/Otu20pyEFPfPebNgmNUFoHzczKZ7kWcPRS4r4fkQOlFy/30MQTX+/L53veb91y0wPleePfe76innYi2R4yNUe6xH5W29930y3wPDDxlZ8EtKqvAvHnzhBoM34N4e9gL93aTO1Sas3qy54+UfQiHNjwf+iqntFtlF1gTSmb0FK9hhN2r1haaePABcre/UtzL7N9PE3ffhbGv9wwXnKKKCMyDg1lm+TLi7iHpNE3ccRvlBhLzk3f4DZq46TqSXf+DWHo99BW6TTs1v2FzEaRirXqlgFY0gbdYZzZR4OovEK84fmZx336bcj/5MeXifURZ3A7aABKh3kR0vr8cKG7X4V5PYm1TWw7awTvclzZT5uUtZJ1yKlnnr8mvUkmFZWUpmczPsDq0rOzmF/O9NzCjjiKbritKwWLfwXis9W71Il9BWwAwx2EM0dfCvYm7iqq+in0ToWT6PrUf2IHmAGBOfeeOSXeKHD4V/TYGB1NqX3IDGgSAOdW+10+647HA+V64N9Gr6oGn0CoAzKp2firUo48iFo9Vsvdk525UT2NoHQDel7GCK2SUwOHuZ3exYIYWAO9bOStHtCvGCawJ7hnRFyK/hmYCYFpeLThCRgqs53K6IlepTdy/EoCpaDeuns9854oJrKnvG/iVesI0SwCm9G58W8GN0r5sud5vqj36tCr4O9FyoOYR7g71xf+yHC9tles9O7l8Kb0LrQdqnF0FF8hXAutFqV3mS9UmZsyDWiWrHZjNAu3GCZwfD/fEX1Dlw+1oR1CjpfPteQfKObQu+2dQfyMda9XLZMbQoqCG6HV6E51zWWHSuB64sIeQTDB7JWE1S1A7vKlzvtzyVkRgjb5Bmuu6GA+D2hj3qlzXOV+JP2ZV6lPV9z8zpMYE69G+oMrHvevzuV4hrEp+tlBf/BFhvh+tDKrTXb5f53gl/6Yn96NLt7d+V5iuRpODaoGFvuf0Jb5Q6b9refFhg5GGa/XsFDQ7qJKutzuf017sODz7zF1d4fTYwWfU1lpkAPBx3zvk1C9cxxs3jteUwHmJY7Fj05R9Tm2uQiIAH/KKQ4FPcG/vfq/egOXlp9cf3OU6vSYu5kwDv7FL566X8nreA79DKhpdybYMCVEj8gL4gL2U4wtC8bjnN7y3TIiGDgQztavNUeQGMJxRiylmgrzGCKwJ9iQ2qcBcpEqCEeQIMLXn1Tmqc9WUN8SmRUiX02TLgNpchnwBJo15VdncYkrPa1wPfGQ57XLdGrW5HTkDDOEVnZOmyWtkD/wOk6eYct04Tww8VmTIIbvT66PNvumBD4VNBUyfIMeMLeBdL8Ld+UkahsprtMB5iTduHHciCz+t55kim0BFc0/Pbda559EMK9+X0O8mFWvVVzF9CakFyt/x8v3hnrgvlkZmPwU21R69Qe0a9cr2AaQZKANZfT1vpS8JrBmBNWNt69ZalvVTtXkc8g2UrtulP7jiXlbJi/Grfgw8HTrAmWB2tdrsRdaBEtGbcbJn+k1eX/bAh3eYxOn26K2qpP46SmpQRMl8u9MXf6ASC9BB4OlK6o7o+ZaILqkxcwvMhV160fVyr9sMgWfTG7e2Lkrb/H3ciwnMLmG4W9/upJx3TIDA8yAVa9WrXt6nHnXIUjANE/ougaGe+IPV8oG42lporL3lPItVb0x0MvIVHMGr+v685bjFJwQudYXU1FSXWdK4XpjvVF/WI3drmjEWuSe4Z+Qbpb65NgQuM+Odn1zGOfth9Sk/hTyuxbEuPSV27sZw97NVu2QT10I7qrFxTH3UR1SLrkBW1wK8Q2X29Wqs21f1n7RmdsbNzaFUxLldfeC/V186SPKqJC1E/xxKpr/Og4OpmthV1VoLpzrWnUiu/a/E0oJ8ryoSZNN1oacTwzVVa9Tsrrqj5RIR1qecTkDu+5phZvmy0zPwRE0OFmq55VVZHUhFglcw5Y9WL4cLvmKnkNwTSmYeVeVyzd62lpEHk6ed0ksXf5GE7iBc5WQ6b6qsvdfZvfc71XhaCAIXI3Jbm5NmuYosuVnJvBIRMSpTXyeXH3KEv8/9/WkEBAIfXWR9pVMs2qm2blVfXoiIeMovVHM84PTGu/16xRAE9pBMZ/ScnMhNLHQx4fRTpUgL05M28zeD3fFfIxwQuGgOfPqixmAmcLna1PeBPRURKQt6LfANTpYerYYrhSCwoYzFWtbYwteoXkL3yg2ISHH7RlXdPJlj2VDfO/A8wgGBKzdWbmtzMoFcm+vyZ1Qg9bXICxCVWTGqBrPdltDjQbHiOCgFgb2XuasrnEkeaHdZLlFhbVGBXYSoHBEfIlUSy4Al/EQw0tBn+nrLELi2ZbbHxw+eyyJtKnOjzHR2DcZaROhF9anjwtwfDi/cpKTNITsgsO842Nb2gaAlzSqj16pkXsskelXNaluILyvEL6ud1hAzD2VcHlzY3/8WWh8CV1/X1NISSdl0nsXWGiFpUq1wuvrvFT5qD30+dof6dxsTb1bDhqHQhGzigYEkWhcC12jZ3bxgfDS8im33dBY6gyYvslheeIQ8elv6krydhcewMG2VnLUtvGD8Fd44OIpWg8Bg5q6Ok+3tSyzL/ajt0nJhWaIejezyYtV6jepHFqsfalTbEdITTZiC6uug+k1H/Wqw8CoZPblMfS+jvqe2Ka2ek+rrEbW9V22PiCV7WXhEPfbkLNrputbvI319ezD7yWz+X4ABAFwDD71Nb1gHAAAAAElFTkSuQmCC" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4yIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2MDc0NDdEM0U0MTExRUU5MzM4RUI2REFBNDlFODE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2MDc0NDdFM0U0MTExRUU5MzM4RUI2REFBNDlFODE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDYwNzQ0N0IzRTQxMTFFRTkzMzhFQjZEQUE0OUU4MTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDYwNzQ0N0MzRTQxMTFFRTkzMzhFQjZEQUE0OUU4MTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4i64HPAAAY3klEQVR4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",
                        className: "toast-icon"
                    }), a.a.createElement("span", {
                        className: "toast-content"
                    }, t))
                },
                A = n("99a69097ed1720fbb78e"),
                b = function(e) {
                    var t = e.locations,
                        n = e.centerOfficeTypeId,
                        r = e.sbuId,
                        i = e.handleChange,
                        u = e.lastTimeOrgLocationId,
                        o = t.sort((function(e, t) {
                            return e.distance - t.distance
                        })),
                        s = Object(c.g)(o.filter((function(e) {
                            return e.typeId == n
                        })), o.filter((function(e) {
                            return e.sbuId == r
                        })), o.filter((function(e) {
                            return e.typeId != n && e.sbuId != r
                        }))),
                        l = s[0].orgLocationId;
                    return u && t.forEach((function(e) {
                        e.orgLocationId == parseInt(u) && (l = parseInt(u))
                    })), i(l), a.a.createElement("div", {
                        className: "confirm"
                    }, a.a.createElement("h3", null, "选择场所"), a.a.createElement(d.d.Group, {
                        defaultValue: l,
                        onChange: function(e) {
                            i(e)
                        }
                    }, a.a.createElement("div", {
                        className: "location-select"
                    }, s.map((function(e) {
                        return a.a.createElement("div", {
                            key: e.orgLocationId,
                            className: "location-item"
                        }, a.a.createElement(d.d, {
                            value: e.orgLocationId,
                            icon: A.a,
                            style: {
                                "--icon-size": "10px"
                            }
                        }, a.a.createElement("div", {
                            className: "bu"
                        }, e.sbuName || "集中办公区"), a.a.createElement("div", {
                            className: "address"
                        }, e.address)))
                    })))))
                },
                v = function(e) {
                    var t = e.selectedIndex,
                        n = e.projects,
                        c = e.detail,
                        r = e.status,
                        i = e.handleSelectProject,
                        u = e.handleClickProjectItem,
                        o = e.handleSelectStatus,
                        s = e.handleInputReason;
                    return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
                        className: "project-title"
                    }, "閫夋嫨浠婃棩瀹為檯宸ヤ綔椤圭洰"), a.a.createElement("div", {
                        className: "project-container"
                    }, a.a.createElement(d.d.Group, {
                        defaultValue: l.d.PARTICIPATED,
                        onChange: o
                    }, a.a.createElement("div", {
                        className: "project-type"
                    }, a.a.createElement(d.d, {
                        value: l.d.PARTICIPATED,
                        style: {
                            "--icon-size": "10px"
                        },
                        icon: A.a
                    }, "浠婃棩瀹為檯鍙備笌椤圭洰"), a.a.createElement(d.d, {
                        value: l.d.UNPARTICIPATED,
                        style: {
                            "--icon-size": "10px"
                        },
                        icon: A.a
                    }, "鏈弬涓庨」鐩�"))), a.a.createElement("div", {
                        className: "thin_item_divider"
                    }), r === l.d.PARTICIPATED ? a.a.createElement(a.a.Fragment, null, !n || 0 === n.length && a.a.createElement("div", {
                        className: "project-select",
                        onClick: i
                    }, "閫夋嫨椤圭洰"), n && n.length > 0 && a.a.createElement("div", {
                        className: "project-history"
                    }, a.a.createElement("div", {
                        className: "title-container"
                    }, a.a.createElement("span", {
                        className: "history"
                    }, "鏈€杩戦€夋嫨椤圭洰"), a.a.createElement("span", {
                        className: "select",
                        onClick: i
                    }, "閫夋嫨椤圭洰")), a.a.createElement("div", {
                        className: "history-container"
                    }, n.map((function(e, n) {
                        return a.a.createElement("div", {
                            key: n,
                            className: t == n ? "item select" : "item",
                            onClick: function() {
                                return u(e, n)
                            }
                        }, e.projectCode)
                    }))), c && c.projectName && a.a.createElement("div", {
                        className: "detail-container"
                    }, a.a.createElement("div", {
                        className: "top"
                    }, a.a.createElement("span", {
                        className: "projectCode"
                    }, null == c ? void 0 : c.projectCode), a.a.createElement("span", {
                        className: "vertical-divider"
                    }), a.a.createElement("span", {
                        className: "name"
                    }, (null == c ? void 0 : c.projectManagerName) + "(" + (null == c ? void 0 : c.projectManagerEmployeeNumber) + ")")), a.a.createElement("div", {
                        className: "middle"
                    }, null == c ? void 0 : c.projectDesc), a.a.createElement("span", {
                        className: 0 == t ? "triangle start" : 1 == t ? "triangle" : "triangle end"
                    })))) : a.a.createElement("div", {
                        className: "reason-container"
                    }, a.a.createElement("div", {
                        className: "input"
                    }, a.a.createElement(d.e, {
                        placeholder: "璇疯緭鍏ュ師鍥�",
                        rows: 3,
                        onChange: s
                    })))))
                },
                E = n("85ab163692c101fef3ae"),
                I = function(e) {
                    var t = e.item,
                        n = e.handleDesc;
                    return a.a.createElement("div", {
                        className: "card"
                    }, a.a.createElement("section", null, a.a.createElement("img", {
                        src: E.a,
                        className: "bord"
                    }), a.a.createElement("div", {
                        className: "title"
                    }, a.a.createElement("span", {
                        className: "time"
                    }, G(t.createTime).format("YYYY-MM-DD HH:mm:ss")), a.a.createElement("span", {
                        className: "project"
                    }, t.projectCode)), a.a.createElement("div", {
                        className: "location"
                    }, t.realLocation), t.remark && t.remark.length > 0 && a.a.createElement("div", {
                        className: "remark",
                        onClick: function() {
                            return n && n(t.remark)
                        }
                    }, "鏌ョ湅澶囨敞")))
                },
                p = function(e) {
                    var t = e.text;
                    return a.a.createElement("div", {
                        className: "dialog"
                    }, a.a.createElement("h3", null, "鍘熷洜锛�"), a.a.createElement("p", null, t || " "))
                },
                O = function() {
                    return a.a.createElement("div", {
                        className: "dialog-promise"
                    }, a.a.createElement("section", null, a.a.createElement("h3", null, "鍦哄湴绛惧埌鐪熷疄鎬ф壙璇�"), a.a.createElement("p", null, "涓哄姞寮哄叕鍙镐俊鎭畨鍏ㄧ鐞嗐€佸姙鍏満鎵€瀹夊叏鍙婂憳宸ヤ汉韬畨鍏紝鍏徃鍙戝竷浜嗐€婂叧浜庝簹淇＄鎶€鍏ㄥ憳寮€灞曗€滃満鍦扮鍒扳€濈殑閫氱煡銆嬨€�"), a.a.createElement("p", null, "璇峰悇浣嶅悓浜嬪鏈汉绛惧埌琛屼负鐨勭湡瀹炴€ц礋璐ｏ紝涓ョ浣跨敤妯℃嫙绔彛銆佷竴閮ㄦ墜鏈哄浜虹鍒般€佷唬绛剧瓑涓嶇湡瀹炵殑杩濊琛屼负杩涜绛惧埌锛屽苟涓旂洿鎺ヤ笂绾х粡鐞嗘湁鐩戠潱绠＄悊鑱岃矗銆�"), a.a.createElement("p", null, "濡傚彂鐜拌繚瑙勮涓哄強杩濊浜哄憳锛屾墍灞濨U閮ㄩ棬浠ュ強杩濊琛屼负灏嗚繘琛屽叏鍛橀€氭姤鎵硅瘎锛屽薄娆″彂鐢熻繚瑙勭殑浜哄憳灏嗘牴鎹憳宸ュ姵鍔ㄧ邯寰嬬鐞嗗埗搴﹁繘琛岀浉搴斿鐞嗐€�")))
                },
                h = function() {
                    return location.origin + "/mobileapps/ai-checkin-mobileweb"
                },
                N = function(e, t) {
                    var n = null;
                    return function() {
                        var c = N,
                            r = arguments;
                        n && (clearTimeout(n), n = null), n = setTimeout((function() {
                            e.apply(c, r)
                        }), t)
                    }
                },
                g = n("4d3cb4cbcd1efe604c5a"),
                C = n("c1ff5b6cec5f671be822"),
                S = n.n(C),
                j = n("7d8545d2807e9743ca01"),
                y = n.n(j),
                T = n("da010f21fea25912dd9e"),
                k = n.n(T),
                w = n("90122cf3021eb6001234"),
                D = (n("a25e83e8799759c246e1"), n("e5d28651693d0c1ec928")),
                M = n("e9aab379f407c6096333"),
                R = n("7a6a68cd2a7df90b2b34"),
                P = n.n(R);
            n("7356deeeab8fecb94b85");
            var U = function(e) {
                    var t = e.type,
                        n = e.sceneConfigs,
                        i = e.handleChange,
                        u = e.handleInput,
                        o = t == l.a.SCOPE ? "澶栧満绛惧埌浠呴€傜敤浠ヤ笅鍦烘櫙锛�" : "褰撳墠鏃堕棿涓嶅湪鏍囧噯鏃堕棿鍐咃紝璇峰娉ㄥ師鍥狅細",
                        s = t == l.a.SCOPE ? "璇疯緭鍏ュ満鍦拌寖鍥村绛惧埌鍘熷洜" : "璇疯緭鍏ヤ笉鍦ㄦ爣鍑嗘椂闂村唴绛惧埌鍘熷洜",
                        f = n[0],
                        m = f ? f.id : "",
                        b = Object(c.e)(Object(r.useState)(!!f && "Y" === f.needComment), 2),
                        v = b[0],
                        E = b[1];
                    return f && i(f.id), a.a.createElement("div", {
                        className: "confirm"
                    }, a.a.createElement("h3", null, o), a.a.createElement(d.d.Group, {
                        defaultValue: m,
                        onChange: function(e) {
                            var t = n.find((function(t) {
                                    return t.id == e
                                })),
                                c = "Y" == (null == t ? void 0 : t.needComment);
                            E(c), i(e)
                        }
                    }, a.a.createElement("div", {
                        className: "content-container"
                    }, a.a.createElement("div", {
                        className: "left-container"
                    }, n.filter((function(e, t) {
                        return t % 2 == 0
                    })).map((function(e) {
                        return a.a.createElement("div", {
                            className: "check-item"
                        }, a.a.createElement(d.d, {
                            value: e.id,
                            icon: A.a,
                            style: {
                                "--icon-size": "10px"
                            }
                        }, e.sceneName))
                    }))), a.a.createElement("div", {
                        className: "right-container"
                    }, n.filter((function(e, t) {
                        return t % 2 == 1
                    })).map((function(e) {
                        return a.a.createElement("div", {
                            className: "check-item"
                        }, a.a.createElement(d.d, {
                            value: e.id,
                            icon: A.a,
                            style: {
                                "--icon-size": "10px"
                            }
                        }, e.sceneName))
                    }))))), v && a.a.createElement("div", {
                        className: "checkin-common"
                    }, a.a.createElement(d.e, {
                        placeholder: s,
                        rows: 3,
                        onChange: u
                    })))
                },
                L = n("22fbe75cb6837af54227");
            n.d(t, "moment", (function() {
                return G
            }));
            var G = Object(w.extendMoment)(k.a),
                F = {
                    startTime: "8:30",
                    endTime: "19:30",
                    mustCheckinTimes: []
                },
                B = [],
                V = y()(),
                Y = l.b.BUSINESS_TRIP;

            function H(e) {
                return Object(c.b)(this, void 0, void 0, (function() {
                    var t, n, r, a;
                    return Object(c.d)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return t = [], [4, P.a.getItem("lsolationList")];
                            case 1:
                                return n = i.sent(), r = null, n && n.length > 0 && (t = Object(c.g)(n), (a = t.find((function(t) {
                                    return t.nt === e
                                }))) && (r = a)), [2, {
                                    list: t,
                                    currentUser: r
                                }]
                        }
                    }))
                }))
            }
            t.default = function() {
                var e = this,
                    t = Object(r.useRef)(),
                    n = Object(r.useRef)(F),
                    A = Object(r.useRef)(B),
                    E = Object(r.useRef)(null),
                    C = Object(r.useRef)(null),
                    j = Object(r.useRef)(null),
                    T = Object(r.useRef)(null),
                    k = Object(c.e)(Object(r.useState)(!1), 2),
                    w = k[0],
                    R = k[1],
                    z = Object(c.e)(Object(r.useState)(!1), 2),
                    Q = z[0],
                    W = z[1],
                    X = Object(c.e)(Object(r.useState)(), 2),
                    J = X[0],
                    x = X[1],
                    K = Object(r.useRef)(),
                    q = Object(r.useRef)(void 0),
                    Z = Object(r.useRef)(void 0),
                    _ = Object(c.e)(Object(r.useState)(!1), 2),
                    $ = _[0],
                    ee = _[1],
                    te = Object(c.e)(Object(r.useState)(!0), 2),
                    ne = te[0],
                    ce = te[1],
                    re = Object(r.useRef)(null),
                    ae = Object(c.e)(Object(r.useState)(!1), 2),
                    ie = ae[0],
                    ue = ae[1],
                    oe = Object(c.e)(Object(r.useState)([]), 2),
                    se = oe[0],
                    le = oe[1],
                    de = Object(c.e)(Object(r.useState)(!1), 2),
                    fe = de[0],
                    me = de[1],
                    Ae = Object(c.e)(Object(r.useState)(!1), 2),
                    be = Ae[0],
                    ve = Ae[1],
                    Ee = Object(c.e)(Object(r.useState)(""), 2),
                    Ie = Ee[0],
                    pe = Ee[1],
                    Oe = Object(c.e)(Object(r.useState)(!1), 2),
                    he = Oe[0],
                    Ne = Oe[1],
                    ge = Object(c.e)(Object(r.useState)(!1), 2),
                    Ce = ge[0],
                    Se = ge[1],
                    je = Object(c.e)(Object(r.useState)(l.d.PARTICIPATED), 2),
                    ye = je[0],
                    Te = je[1],
                    ke = Object(c.e)(Object(r.useState)([]), 2),
                    we = ke[0],
                    De = ke[1],
                    Me = Object(c.e)(Object(r.useState)(-1), 2),
                    Re = Me[0],
                    Pe = Me[1],
                    Ue = Object(c.e)(Object(r.useState)(null), 2),
                    Le = Ue[0],
                    Ge = Ue[1],
                    Fe = Object(c.e)(Object(r.useState)(), 2),
                    Be = Fe[0],
                    Ve = Fe[1],
                    Ye = Object(r.useRef)(""),
                    He = Object(r.useRef)(Y),
                    ze = Object(D.useHistory)(),
                    Qe = Object(r.useRef)(V);
                Object(r.useEffect)((function() {
                    W(ct());
                    var e = Object(M.setInterval)((function() {
                        W(ct()), Qe.current && Qe.current.add(600, "second") < y()() && ot()
                    }), 1e3);
                    return function() {
                        clearInterval(e)
                    }
                }), [n]), Object(r.useEffect)((function() {
                    ! function() {
                        Object(c.b)(this, void 0, void 0, (function() {
                            return Object(c.d)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return mt(), [4, at()];
                                    case 1:
                                        return e.sent(), ot(), [2]
                                }
                            }))
                        }))
                    }(), window.kara ? window.kara.deviceInfo({
                        success: function(e) {
                            re.current = e, window.localStorage.setItem("device", JSON.stringify(e)), We()
                        }
                    }) : document.addEventListener("JSSDKReady", (function() {
                        window.kara.deviceInfo({
                            success: function(e) {
                                re.current = e, window.localStorage.setItem("device", JSON.stringify(e)), We()
                            }
                        })
                    }), !1), g.a.setTitle("鍦哄湴绛惧埌"), g.a.setupRightMenuButton("瑙勫垯璇存槑", "#666", (function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e;
                            return Object(c.d)(this, (function(t) {
                                return e = h(), g.a.openURL({
                                    url: e + "/hint"
                                }), [2]
                            }))
                        }))
                    }))
                }), []);
                var We = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e, t, n, r, a;
                            return Object(c.d)(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return re.current ? (e = re.current.deviceId, !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && It(Et(), "8.0.2") < 0 ? [4, Object(u.e)({
                                            deviceId: e
                                        })] : [3, 2]) : [2];
                                    case 1:
                                        t = c.sent(), n = t.resultCode, r = t.data, "000000" === n && r && r.length > 0 && (a = r[0].token) && (re.current.deviceId = a, window.localStorage.setItem("deviceNew", JSON.stringify(re.current)), window.localStorage.setItem("deviceIdNew", JSON.stringify(e))), c.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    Xe = function() {
                        return !(t.current || ne || ($ ? At() ? (f("灏氭湭鍒拌揪绛惧埌鏃堕棿锛岃鎮ㄦ牴鎹鍒拌鍒欏湪绛惧埌鏃堕棿鍐呯鍒�"), 1) : J ? he && ye === l.d.PARTICIPATED && !Le && (f("璇锋偍閫夋嫨鍙備笌鐨勯」鐩紝濡備笉纭畾鎴栬€呮湭鍒嗛厤璇烽€夋嫨鈥滄湭鍙備笌椤圭洰鈥�"), 1) : (f("瀹氫綅寮傚父锛岃鎮ㄩ噸鏂拌幏鍙栧畾浣嶄俊鎭啀绛惧埌锛屽浠嶆湁闂璇疯仈绯讳俊瀹㈡湇锛�010-82166666锛�"), 1) : (ve(!0), 1)))
                    },
                    Je = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e, t, n;
                            return Object(c.d)(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return Xe() ? (null === (t = window.kara) || void 0 === t || t.showLoading(), [4, it(!1)]) : [2];
                                    case 1:
                                        return c.sent() ? (null === (n = window.kara) || void 0 === n || n.hideLoading(), rt() ? [3, 3] : [4, qe()]) : [2];
                                    case 2:
                                        return c.sent() && xe(), [3, 6];
                                    case 3:
                                        return (e = Ce) ? [4, Ze()] : [3, 5];
                                    case 4:
                                        e = c.sent(), c.label = 5;
                                    case 5:
                                        e && nt(l.c.NO_TRIP_APPLY_NOT_BASE), Ce || xe(), c.label = 6;
                                    case 6:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    xe = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e;
                            return Object(c.d)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return et() ? $e() ? [4, Ke()] : [3, 2] : [3, 7];
                                    case 1:
                                        return t.sent() && nt(), [3, 6];
                                    case 2:
                                        return bt() ? (nt(), [3, 6]) : [3, 3];
                                    case 3:
                                        return (e = !rt()) ? [3, 5] : [4, Ze()];
                                    case 4:
                                        e = t.sent(), t.label = 5;
                                    case 5:
                                        e && nt(), t.label = 6;
                                    case 6:
                                        return [3, 11];
                                    case 7:
                                        return [4, Ke()];
                                    case 8:
                                        return t.sent() ? He.current != l.b.MANUAL_NOT_SCOPE ? [3, 10] : [4, Ze()] : [3, 11];
                                    case 9:
                                        return t.sent() && nt(), [3, 11];
                                    case 10:
                                        nt(), t.label = 11;
                                    case 11:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    Ke = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e;
                            return Object(c.d)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e = null, j.current ? [4, function(e) {
                                            return Object(c.b)(this, void 0, void 0, (function() {
                                                return Object(c.d)(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, P.a.getItem(e + "_placeId")];
                                                        case 1:
                                                            return [2, t.sent()]
                                                    }
                                                }))
                                            }))
                                        }(j.current)] : [3, 2];
                                    case 1:
                                        e = n.sent(), n.label = 2;
                                    case 2:
                                        return [2, new Promise((function(n) {
                                            K.current && K.current.length > 1 && (t.current = d.b.show({
                                                content: a.a.createElement(b, {
                                                    locations: K.current,
                                                    centerOfficeTypeId: E.current,
                                                    lastTimeOrgLocationId: e,
                                                    sbuId: C.current,
                                                    handleChange: ft
                                                }),
                                                actions: [
                                                    [{
                                                        key: "cancel",
                                                        text: "鍙栨秷",
                                                        style: {
                                                            color: "#666"
                                                        },
                                                        onClick: function() {
                                                            var e;
                                                            null === (e = t.current) || void 0 === e || e.close(), t.current = void 0, n(!1)
                                                        }
                                                    }, {
                                                        key: "confirm",
                                                        text: "纭畾",
                                                        onClick: function() {
                                                            var e;
                                                            null === (e = t.current) || void 0 === e || e.close(), t.current = void 0, n(!0)
                                                        }
                                                    }]
                                                ]
                                            }))
                                        }))]
                                }
                            }))
                        }))
                    },
                    qe = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            return Object(c.d)(this, (function(e) {
                                return [2, new Promise((function(e) {
                                    t.current = d.b.show({
                                        content: a.a.createElement(U, {
                                            sceneConfigs: A.current.filter((function(e) {
                                                return e.sceneType == l.a.TIME
                                            })),
                                            type: l.a.TIME,
                                            handleInput: dt,
                                            handleChange: lt
                                        }),
                                        actions: _e(e)
                                    })
                                }))]
                            }))
                        }))
                    },
                    Ze = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            return Object(c.d)(this, (function(e) {
                                return [2, new Promise((function(e) {
                                    t.current = d.b.show({
                                        content: a.a.createElement(U, {
                                            sceneConfigs: A.current.filter((function(e) {
                                                return e.sceneType == l.a.SCOPE
                                            })),
                                            type: l.a.SCOPE,
                                            handleChange: lt,
                                            handleInput: dt
                                        }),
                                        actions: _e(e)
                                    })
                                }))]
                            }))
                        }))
                    },
                    _e = function(e) {
                        return [
                            [{
                                key: "cancel",
                                text: "鍙栨秷",
                                style: {
                                    color: "#666"
                                },
                                onClick: function() {
                                    var n;
                                    Ye.current = "", null === (n = t.current) || void 0 === n || n.close(), t.current = void 0, e(!1)
                                }
                            }, {
                                key: "confirm",
                                text: "纭畾",
                                onClick: function() {
                                    var n;
                                    (-1 == A.current.findIndex((function(e) {
                                        return "Y" == e.needComment && e.id == He.current
                                    })) || 0 != Ye.current.length || (f("璇峰～鍐欑浉搴旂殑澶囨敞鍘熷洜"), 0)) && (null === (n = t.current) || void 0 === n || n.close(), t.current = void 0, e(!0))
                                }
                            }]
                        ]
                    },
                    $e = function() {
                        return !!K.current && K.current.filter((function(e) {
                            return e.sbuId == C.current
                        })).length > 1
                    },
                    et = function() {
                        if (!K.current) return !0;
                        if (K.current.length <= 1) return !0;
                        var e = K.current.some((function(e) {
                                return e.sbuId === C.current
                            })),
                            t = K.current.every((function(e) {
                                return e.typeId !== E.current
                            }));
                        return e && t
                    },
                    tt = function(e, t) {
                        var n = e;
                        0 == (null == n ? void 0 : n.length) && (n = t);
                        var c = T.current;
                        return !(!n || !c || -1 === c.indexOf(n)) || !(!n || !c || -1 === n.indexOf(c))
                    },
                    nt = function(n) {
                        return void 0 === n && (n = null), Object(c.b)(e, void 0, void 0, (function() {
                            var e, r, o, s, b, v, E, I, p, O, h, N, g, C, y, T, k, w, D, M, R, U, L;
                            return Object(c.d)(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        null === (T = t.current) || void 0 === T || T.close(), t.current = void 0, e = n || function() {
                                            var e = l.c.DEFAULT;
                                            return A.current.filter((function(e) {
                                                return e.sceneType == l.a.SCOPE
                                            })).forEach((function(t) {
                                                He.current == t.id && (e = l.c.NOT_IN_SCOPE)
                                            })), A.current.filter((function(e) {
                                                return e.sceneType == l.a.TIME
                                            })).forEach((function(t) {
                                                He.current == t.id && (e = l.c.NOT_IN_MUST_CHECKIN_TIME)
                                            })), e
                                        }(), r = bt() ? null !== (w = null === (k = q.current) || void 0 === k ? void 0 : k.addressName) && void 0 !== w ? w : "" : null == J ? void 0 : J.address, o = (new Date).getTime(), s = i.a.SECRET_KEY + "accessKey" + i.a.ACCESS_KEY + "checkinTime" + o + "realLatitude" + (null == J ? void 0 : J.lat) + "realLocation" + r + "realLongitude" + (null == J ? void 0 : J.lng) + "status" + He.current, b = S.a.enc.Utf8.parse(i.a.SECRET_KEY), v = S.a.enc.Utf8.parse(s), E = S.a.HmacSHA256(v, b), I = S.a.enc.Base64.stringify(E), p = re.current, O = {
                                            deviceId: null == p ? void 0 : p.deviceId,
                                            deviceName: null == p ? void 0 : p.name,
                                            os: null == p ? void 0 : p.systemVersion,
                                            appVersion: null == p ? void 0 : p.appVersion,
                                            appBuild: null == p ? void 0 : p.appBuild,
                                            phoneName: null == p ? void 0 : p.phoneName,
                                            additionInfo: Z.current,
                                            outsideType: e,
                                            orgLocationId: null === (D = q.current) || void 0 === D ? void 0 : D.orgLocationId,
                                            city: null == J ? void 0 : J.city,
                                            province: null == J ? void 0 : J.province,
                                            checkinPlaceId: null === (M = q.current) || void 0 === M ? void 0 : M.id,
                                            realLocation: bt() ? null !== (U = null === (R = q.current) || void 0 === R ? void 0 : R.addressName) && void 0 !== U ? U : "" : null == J ? void 0 : J.address,
                                            realLatitude: null == J ? void 0 : J.lat,
                                            realLongitude: null == J ? void 0 : J.lng,
                                            checkinTime: o,
                                            status: He.current,
                                            common: null !== (L = Ye.current) && void 0 !== L ? L : "",
                                            noProjectRemark: he && Be ? Be : "",
                                            projectCode: he && ye == l.d.PARTICIPATED && Le ? Le.projectCode : "",
                                            accessKey: i.a.ACCESS_KEY,
                                            sign: I
                                        }, d.f.show({
                                            icon: "loading",
                                            duration: 0
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, Object(u.a)(O)];
                                    case 2:
                                        return h = c.sent(), d.f.clear, N = h.resultCode, g = h.resultMessage, "000000" === N ? (d.f.show({
                                            content: a.a.createElement(m, {
                                                type: l.f.SUCCESS,
                                                content: "绛惧埌鎴愬姛"
                                            })
                                        }), Ye.current = "", mt(), j.current && q.current && q.current.id && function(e, t) {
                                            P.a.setItem(e + "_placeId", t)
                                        }(j.current, q.current.orgLocationId + "")) : f(g), [3, 4];
                                    case 3:
                                        return C = c.sent(), y = C instanceof Error ? C.message : "string" == typeof C ? C : "缃戠粶閿欒锛� 璇风◢鍚庨噸璇�", f(y), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    ct = function() {
                        var e = !0,
                            t = y()(),
                            c = y()(t.format("YYYY-MM-DD ") + n.current.startTime),
                            r = y()(t.format("YYYY-MM-DD ") + n.current.endTime);
                        return (t < c || t > r) && (e = !1), e
                    },
                    rt = function() {
                        var e = n.current.mustCheckinTimes;
                        if (!e || 0 == e.length) return !0;
                        for (var t = !1, c = y()(), r = 0; r < e.length; r++) {
                            var a = e[r],
                                i = y()(c.format("YYYY-MM-DD ") + a.startTime);
                            if (c < y()(c.format("YYYY-MM-DD ") + a.endTime) && c > i) {
                                t = !0;
                                break
                            }
                        }
                        return t
                    },
                    at = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var t, r, a, i, o, s;
                            return Object(c.d)(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return l.trys.push([0, 2, , 3]), [4, Object(u.h)()];
                                    case 1:
                                        return t = l.sent(), r = t.resultCode, a = t.data, "000000" === r && (i = F, C.current = a.sbuId, j.current = a.nt, T.current = a.workingLocation, function(t) {
                                            Object(c.b)(e, void 0, void 0, (function() {
                                                var e;
                                                return Object(c.d)(this, (function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, H(t)];
                                                        case 1:
                                                            return (e = n.sent().currentUser) && ee(e.acceptService), [2]
                                                    }
                                                }))
                                            }))
                                        }(a.nt), a.locationType && a.locationType.id && (E.current = a.locationType.id), a.argConfigList.map((function(e) {
                                            var t;
                                            1 != e.enabledDateType && 3 != e.enabledDateType || (i.startTime = e.startTime, i.endTime = e.endTime), 2 != e.enabledDateType && 4 != e.enabledDateType || null === (t = i.mustCheckinTimes) || void 0 === t || t.push({
                                                startTime: e.startTime,
                                                endTime: e.endTime
                                            })
                                        })), n.current = i, A.current = a.sceneConfigList, "Y" === a.timeSheetFlag && (Ne(!0), vt()), R(a.holiday)), [3, 3];
                                    case 2:
                                        return o = l.sent(), s = o instanceof Error ? o.message : "string" == typeof o ? o : "缃戠粶閿欒锛� 璇风◢鍚庨噸璇�", d.f.show(s), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    };

                function it(e) {
                    return void 0 === e && (e = !0), Object(c.b)(this, void 0, Promise, (function() {
                        return Object(c.d)(this, (function(t) {
                            return [2, new Promise((function(t, n) {
                                ue(e);
                                var c = window.kara;
                                if (c) {
                                    var r = function() {
                                        window.kara && window.kara.checkApplicationsIsInstalled && window.kara.checkApplicationsIsInstalled({
                                            bundleIds: ["top.remobax.ardp.agentpro", "top.remobax.ardp.agentstd", "com.oray.sunlogin.service", "youqu.android.todesk", "com.teamviewer.quicksupport.market", "cn.chuci.and.wkfenshen"],
                                            complete: function(e) {
                                                Z.current || (Z.current = {}), Z.current.installedApps = e.installedBundleIds
                                            }
                                        }), c.getCoordinate({
                                            coordinateType: "1",
                                            appId: "dnc-checkin",
                                            success: function(e) {
                                                var n = {
                                                    lng: 0,
                                                    lat: 0
                                                };
                                                n.lng = e.longitude, n.lat = e.latitude, e.sourceInfo && (Z.current ? Z.current = Object.assign(Z.current, e.sourceInfo) : Z.current = e.sourceInfo), e.sourceInfo && e.sourceInfo.isProducedByAccessory ? (alert("鎮ㄧ殑鎵嬫満宸茶繛鎺ュ鎺ヨ澶囷紙渚嬪CarPlay绛夛級锛岃绉婚櫎璁惧鎴栨柇寮€杩炴帴鍚庨噸鏂扮鍒般€俓n璇锋敞鎰忥細澶栨帴璁惧绉婚櫎鍚庯紝鏈変竴瀹氭椂闂寸殑缂撳瓨鏈燂紙1鍒嗛挓鎴栬€呮洿闀匡級锛屽彲绋嶅悗鍐嶅皾璇曠鍒般€�"), c.closePage()) : t(n)
                                            },
                                            fail: function() {
                                                alert("闇€瑕佽幏鍙栨偍鐨勪綅缃俊鎭�"), c.closePage()
                                            }
                                        })
                                    };
                                    /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && It(Et(), "8.0.3") < 0 ? function(e) {
                                        navigator.geolocation.getCurrentPosition((function(t) {
                                            e()
                                        }), (function(e) {
                                            var t;
                                            alert("闇€瑕佽幏鍙栨偍鐨勪綅缃俊鎭�"), null === (t = window.kara) || void 0 === t || t.closePage()
                                        }), {
                                            timeout: 5e3
                                        })
                                    }((function() {
                                        r()
                                    })) : r()
                                }
                            }))]
                        }))
                    }))
                }
                var ut = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e;
                            return Object(c.d)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return Xe() ? (e = rt()) ? [4, Ze()] : [3, 2] : [2];
                                    case 1:
                                        e = t.sent(), t.label = 2;
                                    case 2:
                                        return e ? nt(l.c.MANUAL_NOT_SCOPE) : rt() || Je(), He.current = l.b.IN_SCOPE, [2]
                                }
                            }))
                        }))
                    },
                    ot = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var n, r, o, s, l, f, m, A, b, v, E, I;
                            return Object(c.d)(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        return ie ? [2] : (q.current = void 0, [4, it()]);
                                    case 1:
                                        return n = p.sent(), r = n.lat, o = n.lng, [4, Object(u.k)({
                                            location: r + "," + o
                                        })];
                                    case 2:
                                        return (s = p.sent()) && s.data ? (l = s.data, f = l.result, 0 != l.status ? [3, 5] : (m = f.formatted_address, A = f.addressComponent, b = A.city, v = A.province, E = {
                                            lat: r,
                                            lng: o,
                                            address: m,
                                            city: b,
                                            province: v
                                        }, window.localStorage.setItem("location", JSON.stringify(f)), window.localStorage.setItem("currentLoc", JSON.stringify(E)), x(E), st(o, r, A), (I = !tt(b, v)) ? [4, function(n, r) {
                                            return Object(c.b)(e, void 0, void 0, (function() {
                                                var e, o, s;
                                                return Object(c.d)(this, (function(c) {
                                                    switch (c.label) {
                                                        case 0:
                                                            return tt(n, r) ? [3, 2] : [4, Object(u.j)()];
                                                        case 1:
                                                            return e = c.sent(), o = e.resultCode, s = e.data, "000000" === o && 0 == s ? [2, new Promise((function(e) {
                                                                t.current = d.b.show({
                                                                    content: a.a.createElement("div", {
                                                                        className: "tripHint"
                                                                    }, a.a.createElement("div", null, "褰撳墠鍦ㄩ潪宸ヤ綔鍦板煄甯傦紝鑻ユ偍姝ｅ湪鍑哄樊锛岃鍏堟彁浜ゅ嚭宸敵璇峰苟瀹℃壒閫氳繃鍚庡啀绛惧埌銆�"), a.a.createElement("div", null, "鑻ラ潪鍑哄樊鎯呭喌锛岃缁х画澶栧満绛惧埌骞惰鏄庡師鍥犮€�")),
                                                                    actions: [
                                                                        [{
                                                                            key: "goOn",
                                                                            text: "缁х画绛惧埌",
                                                                            style: {
                                                                                color: "#666"
                                                                            },
                                                                            onClick: function() {
                                                                                var n;
                                                                                null === (n = t.current) || void 0 === n || n.close(), t.current = void 0, e(!0)
                                                                            }
                                                                        }, {
                                                                            key: "jumpTrip",
                                                                            text: "宸梾鐢宠",
                                                                            onClick: function() {
                                                                                var e = i.a.TRIP_URL;
                                                                                g.a.openURL({
                                                                                    url: e
                                                                                })
                                                                            }
                                                                        }]
                                                                    ]
                                                                })
                                                            }))] : [2, new Promise((function(e) {
                                                                e(!1)
                                                            }))];
                                                        case 2:
                                                            return [2]
                                                    }
                                                }))
                                            }))
                                        }(b, v)] : [3, 4])) : (ue(!1), [2]);
                                    case 3:
                                        I = p.sent(), p.label = 4;
                                    case 4:
                                        I && Se(!0), ce(!1), p.label = 5;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    st = function(t, n, r) {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e, a, i, o, s, f, m, A, b;
                            return Object(c.d)(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 2, 3, 4]), e = r.city, a = r.province, [4, Object(u.c)({
                                            city: e,
                                            province: a
                                        })];
                                    case 1:
                                        if (i = c.sent(), o = i.resultCode, s = i.data, "000000" === o) {
                                            if (f = [], s.map((function(e) {
                                                    return e.distance = function(e, t, n, c) {
                                                        var r = e * Math.PI / 180,
                                                            a = n * Math.PI / 180,
                                                            i = (e - n) * Math.PI / 180,
                                                            u = (t - c) * Math.PI / 180,
                                                            o = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(i / 2), 2) + Math.cos(r) * Math.cos(a) * Math.pow(Math.sin(u / 2), 2)));
                                                        return o *= 6378137, Math.round(1e4 * o) / 1e4
                                                    }(n, t, parseFloat(e.latitude), parseFloat(e.longitude))
                                                })), !(m = s[0])) return [2];
                                            s.map((function(e) {
                                                e.distance < m.distance && (m = e), e.distance < 600 && f.push(e)
                                            })), m.distance <= 300 && (m.inScope = !0, He.current = l.b.IN_SCOPE), K.current = f, et() ? (q.current = function(e) {
                                                var t = e[0];
                                                if (t) return e.map((function(e) {
                                                    e.distance < t.distance && (t = e)
                                                })), t.distance <= 300 && (t.inScope = !0, He.current = l.b.IN_SCOPE), t
                                            }(f.filter((function(e) {
                                                return e.sbuId == C.current
                                            }))), q.current || (q.current = m)) : (f.map((function(e) {
                                                return e.inScope = !0, e
                                            })), He.current = l.b.IN_SCOPE, q.current = m, K.current = f), window.localStorage.setItem("officeAddressList", JSON.stringify(s)), window.localStorage.setItem("min", JSON.stringify(q.current)), window.localStorage.setItem("nearOffices", JSON.stringify(f))
                                        }
                                        return [3, 4];
                                    case 2:
                                        return A = c.sent(), b = A instanceof Error ? A.message : "string" == typeof A ? A : "缃戠粶閿欒锛� 璇风◢鍚庨噸璇�", d.f.show(b), [3, 4];
                                    case 3:
                                        return ue(!1), Qe.current = y()(), [7];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    lt = function(e) {
                        He.current = e
                    },
                    dt = function(e) {
                        Ye.current = e
                    },
                    ft = function(e) {
                        var t;
                        q.current = null === (t = K.current) || void 0 === t ? void 0 : t.find((function(t) {
                            return !(t.orgLocationId !== e || (t.inScope = !0, rt() && (He.current = l.b.IN_SCOPE), 0))
                        }))
                    },
                    mt = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e, t, n, r;
                            return Object(c.d)(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 2, , 3]), e = {
                                            time: G().format("YYYY-MM-DD"),
                                            count: 3
                                        }, [4, Object(u.g)(e)];
                                    case 1:
                                        return "OK" === (t = c.sent()).resultMessage && t.data && le(t.data), [3, 3];
                                    case 2:
                                        return n = c.sent(), r = n instanceof Error ? n.message : "string" == typeof n ? n : "缃戠粶閿欒锛� 璇风◢鍚庨噸璇�", d.f.show(r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    At = function() {
                        return !Q && n.current || w
                    },
                    bt = function() {
                        return !Ce && q.current && !0 === q.current.inScope
                    },
                    vt = function() {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e, t, n, r;
                            return Object(c.d)(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 2, , 3]), [4, Object(u.f)()];
                                    case 1:
                                        return "OK" === (e = c.sent()).resultMessage && e.data && (t = e.data.map((function(e) {
                                            return {
                                                projectCode: e,
                                                projectName: ""
                                            }
                                        })), De(t)), [3, 3];
                                    case 2:
                                        return n = c.sent(), r = n instanceof Error ? n.message : "string" == typeof n ? n : "缃戠粶閿欒锛� 璇风◢鍚庨噸璇�", d.f.show(r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    };

                function Et() {
                    return navigator.userAgent.split("kara/")[1] || ""
                }

                function It(e, t) {
                    var n, c, r = /(\.0+)+$/,
                        a = e.replace(r, "").split("."),
                        i = t.replace(r, "").split("."),
                        u = Math.min(a.length, i.length);
                    for (n = 0; n < u; n++)
                        if (c = parseInt(a[n], 10) - parseInt(i[n], 10)) return c;
                    return a.length - i.length
                }
                var pt = function(t) {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e, n, r, a, i, o;
                            return Object(c.d)(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        if ((e = we[t]) && (null == e ? void 0 : e.projectName)) return Ge(e), [2];
                                        c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), n = {
                                            keywords: e.projectCode
                                        }, [4, Object(u.d)(n)];
                                    case 2:
                                        return "OK" === (r = c.sent()).resultMessage && r.data && r.data.results && r.data.results.length > 0 && ((a = we)[t] = r.data.results[0], Ge(r.data.results[0]), De(a)), [3, 4];
                                    case 3:
                                        return i = c.sent(), o = i instanceof Error ? i.message : "string" == typeof i ? i : "缃戠粶閿欒锛� 璇风◢鍚庨噸璇�", d.f.show(o), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    Ot = function(t) {
                        return Object(c.b)(e, void 0, void 0, (function() {
                            var e, n, r, a, i;
                            return Object(c.d)(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, H(j.current)];
                                    case 1:
                                        return e = u.sent(), n = e.list, r = e.currentUser, a = Object(c.g)(n), r ? (i = function(e, t, n) {
                                            return e.map((function(e) {
                                                return e.nt === t ? Object(c.a)(Object(c.a)({}, e), n) : e
                                            }))
                                        }(n, j.current, {
                                            acceptService: t
                                        }), P.a.setItem("lsolationList", i)) : (a.push({
                                            nt: j.current,
                                            acceptService: t
                                        }), P.a.setItem("lsolationList", a)), [2]
                                }
                            }))
                        }))
                    };
                return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                    className: "home-container"
                }, a.a.createElement("div", {
                    className: "home-container-scroll"
                }, a.a.createElement("div", {
                    className: "top-container"
                }, a.a.createElement("div", {
                    className: "location-container"
                }, bt() ? a.a.createElement(o.a, {
                    type: "dingwei",
                    color: "#48BE36",
                    size: 20
                }) : a.a.createElement(o.a, {
                    type: "dingwei",
                    color: "#F84B47",
                    size: 20
                }), a.a.createElement("span", {
                    className: "location"
                }, function() {
                    var e, t;
                    return bt() ? null !== (t = null === (e = q.current) || void 0 === e ? void 0 : e.addressName) && void 0 !== t ? t : "" : J && !ie ? J.address : "姝ｅ湪鑾峰彇浣嶇疆淇℃伅..."
                }())), a.a.createElement("span", {
                    className: "reLoc",
                    onClick: ot
                }, ie ? "瀹氫綅涓�..." : "閲嶆柊瀹氫綅")), he && a.a.createElement(v, {
                    selectedIndex: Re,
                    projects: we,
                    status: ye,
                    detail: Le,
                    handleSelectStatus: function(e) {
                        Te(e)
                    },
                    handleClickProjectItem: function(e, t) {
                        t != Re && (Pe(t), pt(t))
                    },
                    handleSelectProject: function() {
                        ! function(t) {
                            g.a.registerNotification(l.e, (function(n) {
                                    return Object(c.b)(e, void 0, void 0, (function() {
                                        var e;
                                        return Object(c.d)(this, (function(c) {
                                            return e = n.info.data, t(e || ""), [2]
                                        }))
                                    }))
                                })),
                                function(e, t, n) {
                                    if (void 0 === n && (n = !1), -1 != window.navigator.userAgent.indexOf("kara")) {
                                        var c = window.kara;
                                        c && c.openURL({
                                            url: h() + e,
                                            replace: n ? 1 : 0
                                        })
                                    } else n ? t.replace(e) : t.push(e)
                                }("/project", ze, !1)
                        }((function(e) {
                            var t = {
                                    projectCode: e.data.projectCode,
                                    projectName: e.data.projectName,
                                    projectDesc: e.data.projectDesc,
                                    projectManagerName: e.data.projectManagerName,
                                    projectManagerEmployeeNumber: e.data.projectManagerEmployeeNumber
                                },
                                n = we,
                                c = n.findIndex((function(e) {
                                    return e.projectCode === t.projectCode
                                })); - 1 !== c ? n.splice(c, 1) : (n.splice(0, 0, t), n.length > 3 && -1 === c && n.pop()), Pe(0), Ge(t), De(n)
                        }))
                    },
                    handleInputReason: function(e) {
                        Ve(e)
                    }
                }), a.a.createElement("div", {
                    className: "content-container"
                }, a.a.createElement("div", {
                    className: "work-order",
                    onClick: function() {
                        var e = "https://apps.asiainfo.com/cms/resources/ai_trip/zh_cn/content_603313117.html"; - 1 != window.navigator.userAgent.indexOf("kara") ? window.kara && g.a.openURL({
                            url: e
                        }) : window.location.replace(e)
                    }
                }, a.a.createElement(o.a, {
                    type: "wenhao",
                    color: "#999",
                    size: 22
                })), a.a.createElement("div", {
                    className: At() ? "circle disable" : bt() ? "circle" : "circle outside",
                    onClick: N(Je, 500)
                }, a.a.createElement("span", {
                    className: "sign"
                }, At() ? "闈炵鍒版椂闂�" : bt() ? "鍦哄湴绛惧埌" : "澶栧満绛惧埌"), At() && a.a.createElement("div", {
                    className: "clock"
                }, n.current.startTime.substring(0, 5), "~", n.current.endTime.substring(0, 5))), a.a.createElement("div", {
                    className: "status-container"
                }, function() {
                    var e, t, n = "",
                        c = null;
                    return At() ? n = "涓嶅湪绛惧埌鏃堕棿锛屾棤娉曠鍒�" : ie ? n = "姝ｅ湪鑾峰彇鏁版嵁..." : bt() ? n = "宸插湪绛惧埌鍖哄煙锛屽彲绛惧埌" : (n = "涓嶅湪绛惧埌鍖哄煙锛屽彧鑳藉鍦虹鍒�", c = "閲嶆柊瀹氫綅"), a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                        className: "location-status"
                    }, a.a.createElement("span", {
                        className: "status"
                    }, n), c && a.a.createElement("span", {
                        className: "reLoc",
                        onClick: ot
                    }, c)), bt() && !At() && K.current && (null === (e = K.current) || void 0 === e ? void 0 : e.length) > 1 && (et() ? a.a.createElement("div", {
                        className: "bu-name"
                    }, null === (t = q.current) || void 0 === t ? void 0 : t.sbuName, "鍦烘墍") : a.a.createElement("div", {
                        className: "bu-name"
                    }, "澶欱U鍦烘墍")), bt() && a.a.createElement("div", {
                        className: "out-bu",
                        onClick: ut
                    }, "鎴戜笉鍦ㄨ鍦烘墍鍔炲叕锛�", a.a.createElement("span", null, "鍒囨崲鍦哄绛�")))
                }(), a.a.createElement((function() {
                    return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                        className: "commitment"
                    }, a.a.createElement(d.d, {
                        onChange: function(t) {
                            return Object(c.b)(e, void 0, void 0, (function() {
                                return Object(c.d)(this, (function(e) {
                                    return Ot(t), ee(t), [2]
                                }))
                            }))
                        },
                        checked: $,
                        icon: L.a
                    }), a.a.createElement("span", {
                        className: "ag-ckbox",
                        onClick: function() {
                            t.current || ve(!0)
                        }
                    }, "鎴戞壙璇烘湰浜虹鍒扮殑鐪熷疄鎬�")))
                }), null))), a.a.createElement("div", {
                    className: "record-title"
                }, a.a.createElement("span", {
                    className: "title"
                }, "浠婃棩绛惧埌璁板綍")), a.a.createElement("div", {
                    className: "record-list"
                }, a.a.createElement("div", {
                    className: "list"
                }, se && se.length ? se.map((function(e, t) {
                    return a.a.createElement(I, {
                        item: e,
                        handleDesc: function() {
                            return function(e) {
                                e && (pe(e || ""), me(!0))
                            }(e.remark)
                        },
                        key: t
                    })
                })) : a.a.createElement(s, null))))), a.a.createElement(d.b, {
                    visible: fe,
                    content: a.a.createElement(p, {
                        text: Ie
                    }),
                    closeOnAction: !0,
                    onClose: function() {
                        me(!1)
                    },
                    actions: [{
                        key: "confirm",
                        text: "纭畾"
                    }]
                }), a.a.createElement(d.b, {
                    className: "ai-dialog-light",
                    visible: be,
                    content: a.a.createElement(O, null),
                    closeOnAction: !0,
                    onClose: function() {
                        ve(!1)
                    },
                    closeOnMaskClick: !0,
                    actions: [{
                        key: "confirm",
                        text: "鎴戝凡鐭ユ檽骞舵壙璇烘湰浜虹鍒扮殑鐪熷疄鎬�",
                        onClick: function() {
                            $ || ee(!0), Ot(!0)
                        }
                    }]
                }))
            }
        },
        "22fbe75cb6837af54227": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var c = n("275976081ce1abf67779"),
                r = n.n(c),
                a = n("06d8846050cfb57dcd78"),
                i = function(e) {
                    return r.a.createElement(a.a, {
                        type: e ? "fuxuan-xuanzhong" : "fuxuan",
                        color: e ? "#FF8928" : "#ccc",
                        size: 18
                    })
                }
        },
        "3da094724f76fbfd5342": function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {
                return i
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "k", (function() {
                return l
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "a", (function() {
                return f
            })), n.d(t, "j", (function() {
                return m
            })), n.d(t, "i", (function() {
                return A
            })), n.d(t, "f", (function() {
                return b
            })), n.d(t, "d", (function() {
                return v
            }));
            var c = n("2ed98e28bd39a71ea784"),
                r = n("8880da179a969fe34488"),
                a = n("d7b9a318decb73da5108");
            c.b.setBase(r.a.REACT_APP_GATEWAY), n("2e7455791fbd46a31510");
            var i = function(e) {
                    return Object(c.a)(a.a.SIGN_RECORD_LIST).body(e).jsonHeader().post()
                },
                u = function() {
                    return Object(c.a)(a.a.ALL_CONFIG).jsonHeader().get()
                },
                o = function() {
                    return Object(c.a)(a.a.HINT_MESSAGE).jsonHeader().get()
                },
                s = function(e) {
                    return Object(c.a)(a.a.OFFICE_LIST).params(e).jsonHeader().get()
                },
                l = function(e) {
                    return Object(c.a)(a.a.REGEO).body(e).jsonHeader().post()
                },
                d = function(e) {
                    return Object(c.a)(a.a.GET_PUSH_TOKEN).body(e).jsonHeader().post()
                },
                f = function(e) {
                    return Object(c.a)(a.a.CHECKIN).body(e).jsonHeader().post()
                },
                m = function() {
                    return Object(c.a)(a.a.QUERY_TRIP_VALIDATE).jsonHeader().get()
                },
                A = function(e) {
                    return Object(c.a)(a.a.HOLIDAY_DAYS).body(e).jsonHeader().post()
                },
                b = function() {
                    return Object(c.a)(a.a.RECENT_PROJECT).jsonHeader().get()
                },
                v = function(e) {
                    return Object(c.a)(a.a.GET_PROJECT).body(e).jsonHeader().post()
                }
        },
        "85ab163692c101fef3ae": function(e, t, n) {
            "use strict";
            t.a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAAGymRCVAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJaADAAQAAAABAAAAJQAAAACQyAEPAAACGUlEQVRYCeWWv0rEQBDGL4IWKggeNlbXWdn6B7srtFEQwXew09ewthJ9BH0Nn8HGzs7rtDnhiL+JTNhsdpM1m0sOHJjb2d1vvvlmc/mTpGm6MhgMvvBlPLNEAxkBzBiWzLUsZiMtLfoXQJ9Kiml2ITefZJTLU8m1eFbgFDlkS4dTiU0rAc1NktxdmyCNpQLuVq8gHcF9a1w5CquIH+EPuNdKLCA/bLS3WwEqgxckAAW6Tl0JZDw0J95Y2OqYJHnfy9DxBnr38IkID7VgiRAe1JFWXhxfJUg/2Vu39xuRKYko1VjGkOto4gtxgrEwKSzGThCYXahYnjxfWo5qM2f6DR6tefMpwkYJP0MotvET/AIPuw0BBhkF7vBgqyWF6SqErZZIAZC9VREqLmiE6MZHFkRggiAau8hMTHAM0aVNFpxsAyF6Mslinwr5KzP2VtmylTae0967tNiYQBPhWG2FSAiFKPaMVNitBlGjtBdF8E+Sa28RDnKNszjCx/g5voMvpslVx6/x7C5hbM1a6xhFm/g9PotV15ookwhRG3jhUfoXoSbXXGLEyEtjulCitFNEyesxSJzmdDYizPshoKfZmRizEMXlP+f95DGxnccIk7u1ZJ0LsQuiqPTVaWN6mSNMHsK59SLCVRRF+Ye/a7+3NYS9ynH1JsBVGD3HCydKhCLqpa0PTlfjTdeemybOLY+T2p0beVNiRA1/AAbRv+Mod+oSAAAAAElFTkSuQmCC"
        },
        "99a69097ed1720fbb78e": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var c = n("275976081ce1abf67779"),
                r = n.n(c),
                a = n("06d8846050cfb57dcd78"),
                i = function(e) {
                    return r.a.createElement(a.a, {
                        type: e ? "danxuan-xuanzhong" : "danxuan",
                        color: e ? "#FF8928" : "#ccc",
                        size: 16
                    })
                }
        },
        d7e9eb5549c8706aa74e: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "d", (function() {
                return a
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "f", (function() {
                return u
            }));
            var c, r, a, i, u, o = "Select_Project_Notification";
            ! function(e) {
                e[e.DEFAULT = -1] = "DEFAULT", e[e.NOT_IN_SCOPE = 0] = "NOT_IN_SCOPE", e[e.NOT_IN_MUST_CHECKIN_TIME = 1] = "NOT_IN_MUST_CHECKIN_TIME", e[e.MANUAL_NOT_SCOPE = 2] = "MANUAL_NOT_SCOPE", e[e.NO_TRIP_APPLY_NOT_BASE = 3] = "NO_TRIP_APPLY_NOT_BASE"
            }(c || (c = {})),
            function(e) {
                e[e.MANUAL_NOT_SCOPE = -1] = "MANUAL_NOT_SCOPE", e[e.IN_SCOPE = 0] = "IN_SCOPE", e[e.BUSINESS_TRIP = 1] = "BUSINESS_TRIP", e[e.OTHER = 2] = "OTHER", e[e.EPI_HOME = 3] = "EPI_HOME", e[e.BAIFANGKEHU = 10] = "BAIFANGKEHU", e[e.WEIDENGJIBANGONGDIDIAN = 11] = "WEIDENGJIBANGONGDIDIAN", e[e.XINJIANG = 4] = "XINJIANG", e[e.BANRIJIA = 5] = "BANRIJIA", e[e.GENHUANBANGONGCHANGSUO = 6] = "GENHUANBANGONGCHANGSUO", e[e.JIAOTONGYONGDU = 7] = "JIAOTONGYONGDU", e[e.FORGET = 8] = "FORGET", e[e.OTHER_TIME = 9] = "OTHER_TIME"
            }(r || (r = {})),
            function(e) {
                e[e.PARTICIPATED = 0] = "PARTICIPATED", e[e.UNPARTICIPATED = 1] = "UNPARTICIPATED"
            }(a || (a = {})),
            function(e) {
                e[e.SCOPE = 1] = "SCOPE", e[e.TIME = 2] = "TIME"
            }(i || (i = {})),
            function(e) {
                e[e.SUCCESS = 1] = "SUCCESS", e[e.FAILURE = 2] = "FAILURE"
            }(u || (u = {}))
        }
    }
]);
`;

$done({body : str});
