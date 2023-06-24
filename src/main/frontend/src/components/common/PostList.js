import React from "react";

const PostList = () => {
    return (
        <div>
            <table className="another_category_table">
                <tbody>
                    <tr>
                        <th className="another_category_th">첫번째 글</th>
                        <td className="another_category_td">2023.06.23</td>
                    </tr>
                    <tr>
                        <th className="another_category_th">두번째 글</th>
                        <td className="another_category_td">2023.06.24</td>
                    </tr>
                    <tr>
                        <th className="another_category_th">세번째 글</th>
                        <td className="another_category_td">2023.06.25</td>
                    </tr>
                    <tr>
                        <th className="another_category_th">네번째 글</th>
                        <td className="another_category_td">2023.06.26</td>
                    </tr>
                    <tr>
                        <th className="another_category_th">다섯번째 글</th>
                        <td className="another_category_td">2023.06.27</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PostList;